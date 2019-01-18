<?php 
	/*
	================================================================================
	Creator		: Ceri Binding, University of South Wales
	Project		: SENESCHAL
	Require		: SeneschalAPI.php
	Summary		: Align delimited data column to scheme concepts by term comparison
	License		: CC-BY - Creative Commons Attribution
	================================================================================
	History	 :

	25/02/20143 CFB Created script
	================================================================================
	*/

	include_once("SeneschalAPI.php");	
	$api = new SeneschalAPI();	
	
	// get parameters from request
	$scheme = empty($_REQUEST["scheme"]) ? "" : $_REQUEST["scheme"];
	$filename = empty($_FILES["file"]["name"]) ? "" : $_FILES["file"]["name"];
	$column = empty($_REQUEST["column"]) ? 1 : (int)$_REQUEST["column"];
	if($column < 1) $column = 1;
	$threshold = empty($_REQUEST["threshold"]) ? 80 : (int)$_REQUEST["threshold"];	
	if($threshold < 0) 
		$threshold = 0;
	else if($threshold > 100)
		$threshold = 100;

	echo $api->getHtmlHeader(); 
?>		
<form action="<?php $PHP_SELF ?>" method="post" enctype="multipart/form-data">
<fieldset><legend>Align data to scheme</legend>
<label for='file'>Data file:</label><input type='file' name='file' id='file' value='<?php echo $filename; ?>'>&nbsp;
<label for='column'>Column number:</label><input type='number' name='column' id='column' min='1' max='30' step='1' value='<?php echo $column; ?>'><br><br>
<label>Scheme:</label><?php echo $api->getSchemeSelector($scheme); ?>&nbsp;
<label for='threshold'>Threshold:</label><input type='number' name='threshold' id='threshold' min='1' max='100' step='1' value='<?php echo $threshold; ?>'>% &nbsp;<input type='submit' name='submit' value='Submit'>	
</fieldset>
</form>
<p>
First select a data file to be aligned. The data is expected to be a list of values, either as a single column of text (*.txt) or multiple columns of comma delimited text (*.csv) format.<br>
If the file contains more than one column (*.csv), choose the numbered column to align, starting at 1 on the left.<br>
Select the scheme you want to align the data to - matches below the threshold percentage will not appear in the results.<br>
The results contain unique values from the selected data column. Preferred and alternate terms are used in the alignment.<br>
Alignment is only comparing terms. 100% match does not necessarily indicate the correct concept. Check the results carefully!<br>
Note: This is an experimental page with acceptable performance for smaller data files (tested on a data file of 25,500 rows).<br>
In case of problems with larger data files try splitting the file, alternatively reduce the input data to unique values only
</p>

<?php
	if(empty($filename)) 
	{
		echo "<p>[No data file to process]</p>";
	}
	else	// is this a response to upload request?
	{		
		$allowedExts = array("txt", "csv");
		$tmp = explode('.', $filename);
		$ext = strtolower(end($tmp));
		//echo "File type: " . $_FILES["file"]["type"];

		if(($_FILES["file"]["type"] == "text/plain" || 
			$_FILES["file"]["type"] == "text/csv" || 
			$_FILES["file"]["type"] == "application/vnd.ms-excel") && 
			in_array($ext, $allowedExts))
			//&& ($_FILES["file"]["size"] < 20000))		
		{
			if ($_FILES["file"]["error"] > 0)
			{
				echo "Error: " . $_FILES["file"]["error"] . "<br>";
				return;
			}
			// output metadata about request (test)
			/*echo "Data file name: " . $filename . "<br>";
			echo "Data file type: " . $_FILES["file"]["type"] . "<br>";
			echo "Data file size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
			echo "Temp file name: " . $_FILES["file"]["tmp_name"] . "<br>";
			echo "Concept scheme: " . $scheme . "<br>";
			echo "Column: " . $column . "<br>";
			echo "Threshold: " . $threshold . "<br>";*/

			// read tabular data from file
			$inputRows = getTabularDataFromFile2($_FILES["file"]["tmp_name"]);
			//$inputRows = getTabularDataFromFile($_FILES["file"]["name"]);
			//echo "Reading " . $filename . " [" . count($inputRows) . " rows]<br>";
			
			// get all values from the specified column of the tabular data
			$dataValues = Array();
			if($column < 1) $column = 1;
				
			foreach ($inputRows as $inputRow) {	
				$dataValues[] = cleanToCompare($inputRow[$column - 1]);  
			}
			
			// reduce to a (sorted) list of unique sorted values 
			$dataValues = array_unique($dataValues);
			sort($dataValues);
			//echo "Input reduced to " . count($dataValues) . " unique values<br>";				
			
			// get all concept LABELS from the specified scheme
			$conceptLabels = $api->getConceptLabelMatch($scheme); 			
			//echo "Reading &lt;" . $scheme . "&gt; [" . count($conceptLabels) . " concept labels]<br>";

			// anonymous inline functions don't (currently) work as server PHP version is 5.2.17,
			// so declaring named nested function instead, to use with array_map in next step
			// if server upgrades, can just do $concepts = array_map(function($element){ ... }, $concepts);
			function reduceConceptLabelsArray($element) {
				return Array("uri" => $element['uri'], "label" => cleanToCompare($element['label']));
			}
			$conceptLabels = array_map("reduceConceptLabelsArray", $conceptLabels);			
			
			// build the output table
			$s = "<table width='95%'><thead>";
			$s .= "<th>Data Value</th>";
			$s .= "<th>Best Match</th>";
			$s .= "<th>Concept URI</th>";
			$s .= "<th>Score</th>";
			$s .= "</thead>";
			
			foreach ($dataValues as $dataValue)
			{
				$bestMatch = getBestMatch($dataValue, $conceptLabels);
				
				if($bestMatch["score"] >= $threshold)
				{
					$s .= "<tr><td>" . $dataValue . "</td>";
					$s .= "<td>" . $bestMatch["label"] . "</td>";
					$s .= "<td><a target='_blank' href='" . $bestMatch["uri"] . "'>" . $bestMatch["uri"] . "</a></td>";
					$s .= "<td>" . floor($bestMatch["score"]) . "%</td>";
					$s .= "</tr>";	
				}
				else
				{
					$s .= "<tr><td>" . $dataValue . "</td>";
					$s .= "<td>(no match above threshold)</td>";
					$s .= "<td>&nbsp;</td>";
					$s .= "<td>&nbsp;</td>";
					$s .= "</tr>";	
				}								
			}	
			$s .= "</table>";
			// print the output table
			print $s;			
		}
		else
		{
			echo "Invalid file";
		}
	}

	// import delimited data file into an array
	function getTabularDataFromFile($inputFileName)
	{
		$lines = explode("\n", file_get_contents($inputFileName, true));
		$head = str_getcsv(array_shift($lines)); // str_getcsv is PHP >= 5.3
		$headCount = count($head);

		$data = array();
		foreach ($lines as $line) {
			// ensure head and row column counts are the same 
			$row = array_pad(str_getcsv($line),$headCount, '');
			$data[] =  $row; //array_combine($head, $row);
		}
		return($data);
	}
	/**
	* @link http://gist.github.com/385876
	* alternative used because str_getcsv is only available in PHP >= 5.3
	*/
	function getTabularDataFromFile2($filename='', $delimiter=',')
	{
		if(!file_exists($filename) || !is_readable($filename))
			return FALSE;
	 
		$data = array();
		if (($handle = fopen($filename, 'r')) !== FALSE)
		{
			while (($row = fgetcsv($handle, 1000, $delimiter)) !== FALSE)
			{
				$data[] = $row;
			}
			fclose($handle);
		}
		return $data;
	}
 
	
	// Get the best matching label from all concept labels
	function getBestMatch($str, $concepts) 
	{
		$bestMatch["uri"] = "";
		$bestMatch["label"] = "";
		$bestMatch["score"] = 0;
		
		foreach ($concepts as $concept) 
		{	
			$score = (1 - levenshtein($str, $concept['label']) / max(strlen($str), strlen($concept['label']))) * 100;	
			// alternative to levenshtein:
			//similar_text($str, $concept['label'], $score);

			if($score > $bestMatch["score"])
			{
				$bestMatch["uri"] = $concept['uri'];
				$bestMatch["label"] = $concept['label'];
				$bestMatch["score"] = $score;				
			}

			// exact match won't be beaten so break early
			if($score >= 100)
				break;						
		}		
		return $bestMatch;
	}			

	// normalise a string for comparisons
	function cleanToCompare($str)
	{
		// make an uppercase copy
		$s = strtoupper($str);	
		
		// replace multiple consecutive spaces with single space
		$s = preg_replace( "/\s+/", " ", $s);

		// REMOVE any space that is followed by punctuation e.g. This one . But not this one. 
		$patterns = array("/\s+/", "/\s([?.!])/");
		$replacer = array(" ","$1");
		$s = preg_replace($patterns, $replacer, $s);

		// remove bracketed qualifiers to improve prospect of match e.g. "DYKE (DEFENCE)" becomes "DYKE"
		$patterns = array("/\([^\)]+\)/");
		$replacer = array("","$1");
		$s = preg_replace($patterns, $replacer, $s);

		// trim leading and trailing spaces
		$s = trim($s);

		// finally, return the modified string
		return $s;
	}
	
?>
</body>
</html>