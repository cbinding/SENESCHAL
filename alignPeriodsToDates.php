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
	echo $api->getHtmlHeader(); 

	// get parameters from request
	$filename = empty($_FILES["file"]["name"]) ? "" : $_FILES["file"]["name"];
	$column = empty($_REQUEST["column"]) ? 1 : (int)$_REQUEST["column"];
	if($column < 1) $column = 1;	
?>

<form action="<?php $PHP_SELF ?>" method="post" enctype="multipart/form-data">
<fieldset><legend>Identify period year ranges</legend>
<label for='file'>Data File:</label><input type='file' name='file' id='file' value='<?php  echo $filename; ?>'>&nbsp;
<label for='column'>Column number:</label>
<input type='number' name='column' id='column' min='1' max='30' step='1' value='<?php echo $column; ?>'>&nbsp;
<input type='submit' name='submit' value='Submit'>	
</fieldset>
</form>
<p>
First select an input data file to be processed. The data file is expected to be delimited text format (csv|tab|text).<br>
If the file contains more than one column of data, choose the numbered column to process, starting at 1 on the left.<br>
The results contain unique values from the selected column. The process identifies start/end years from known text patterns<br>
e.g. "AD 400-600", "EARLY 3RD CENTURY", "600-300 BC", "C2-C3" etc.
</p>

<?php
	if(empty($filename)) 
	{
		echo "<p>[No data file to process]</p>";
	}
	else	// is this a response to upload request?
	{	
		$allowedExts = array("txt", "csv", "tab");
		$tmp = explode('.', $filename);
		$ext = end($tmp);

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
			
			$inputRows = getTabularDataFromFile2($_FILES["file"]["tmp_name"]);

			// get all values from the specified column of the tabular data			
			$dataValues = Array();
			if($column < 1) $column = 1;
				
			foreach ($inputRows as $inputRow) {	
				$dataValues[] = $inputRow[$column - 1];  
			}

			// reduce to a (sorted) list of unique sorted values 
			$dataValues = array_unique($dataValues);
			sort($dataValues);

			// build the header for the output table
			$s = "<table width='95%'><thead>";
			$s .= "<th>Data Value</th>";		
			$s .= "<th>Start year</th>";
			$s .= "<th>End year</th>";		
			$s .= "</thead>";

			foreach ($dataValues as $dataValue)
			{
				$timeSpan = getPeriodDates($dataValue);
				$s .= "<tr><td>" . $timeSpan["label"] . "</td><td>" . $timeSpan["yearStart"] . "</td><td>" . $timeSpan["yearEnd"] . "</td></tr>";
			}
			$s .= "</table>";
			print $s;
		}
	}
	
	// for use where we don't have a named period to match periods list
	// returns associative array -> a["yearStart"], a["yearEnd"]
	function getPeriodDates($term)
	{
		// initialize array to be returned
		$INVALID_YEAR = 0;
		$timeSpan = array("label" => strtoupper(trim($term)), "yearStart" => $INVALID_YEAR, "yearEnd" => $INVALID_YEAR);

		// do some data cleansing before matching
		$term = strtoupper(trim($term));
		
		// "EARLY FIFTH CENTURY BC"
		if(preg_match_all('/((EARLY|MID|LATE)\s+)?(FIRST|SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH|TENTH|ELEVENTH|TWELFTH|THIRTEENTH|FOURTEENTH|FIFTEENTH|SIXTEENTH|SEVENTEENTH|EIGHTEENTH|NINETEENTH|TWENTIETH)\s+CENTURY(\s+(AD|BC))?/', $timeSpan["label"], $matches))
		{
			$prefix = $matches[2][0];
			$centuryName = $matches[3][0]; 
			$isBC = ($matches[5][0] == 'BC');
			$centuryNo = 0;

			switch($centuryName)
			{
				case "FIRST": $centuryNo = 1; break;
				case "SECOND": $centuryNo = 2; break;
				case "THIRD": $centuryNo = 3; break;
				case "FOURTH": $centuryNo = 4; break;
				case "FIFTH": $centuryNo = 5; break;
				case "SIXTH": $centuryNo = 6; break;
				case "SEVENTH": $centuryNo = 7; break;
				case "EIGHTH": $centuryNo = 8; break;
				case "NINTH": $centuryNo = 9; break;
				case "TENTH": $centuryNo = 10; break;
				case "ELEVENTH": $centuryNo = 11; break;
				case "TWELFTH":	$centuryNo = 12; break;
				case "THIRTEENTH": $centuryNo = 13;	break;
				case "FOURTEENTH": $centuryNo = 14;	break;
				case "FIFTEENTH": $centuryNo = 15; break;
				case "SIXTEENTH": $centuryNo = 16; break;
				case "SEVENTEENTH": $centuryNo = 17; break;
				case "EIGHTEENTH": $centuryNo = 18; break;
				case "NINETEENTH": $centuryNo = 19; break;
				case "TWENTIETH": $centuryNo = 20; break;
			}

			$timeSpan = getCenturyYears($centuryNo, $isBC, $prefix, $timeSpan);			
		}

		// "12TH CENTURY AD" "EARLY 6TH CENTURY"
		elseif(preg_match_all('/^((EARLY|MID|LATE)\s+)?(\d+)(ST|ND|RD|TH)\s+CENTURY(\s+(AD|BC))?$/', $timeSpan["label"], $matches))
		{
			//print_r($matches);
			$prefix = $matches[2][0]; 
			$centuryNo = $matches[3][0]; 
			$isBC = ($matches[6][0] == 'BC');

			$timeSpan = getCenturyYears($centuryNo, $isBC, $prefix, $timeSpan);		
		}

		// "AD400-600" (NOTE: incomplete numbers e.g. AD 367-75, AD 350-3 get fixed later - see correctEndDate)
		elseif(preg_match_all('/^(C.*\s)?AD\s*(\d+)\s*-\s*(\d+)$/', $timeSpan["label"], $matches))
		{
			$timeSpan["yearStart"] = $matches[2][0];
			$timeSpan["yearEnd"] = $matches[3][0];
			//if($timeSpan["yearEnd"] < $timeSpan["yearStart"])
				//$timeSpan["yearEnd"] ...			
		}

		// "800 AD" "500 BC" "C. 250 AD"
		elseif(preg_match_all('/^(C.*\s)?(\d+)\s?(AD|BC)$/', $timeSpan["label"], $matches))
		{
			$timeSpan["yearStart"] = $matches[2][0];
			$isBC = ($matches[3][0] == 'BC');
			if($isBC)
				$timeSpan["yearStart"] *= -1;
			$timeSpan["yearEnd"] = $timeSpan["yearStart"];			
		}
		// "AD 800" "BC 500" "C. AD 250"
		elseif(preg_match_all('/^(C.*\s)?(AD|BC)\s?(\d+)$/', $timeSpan["label"], $matches))
		{
			$timeSpan["yearStart"] = $matches[3][0];	
			$isBC = ($matches[3][0] == 'BC');
			if($isBC)
				$timeSpan["yearStart"] *= -1;
			$timeSpan["yearEnd"] = $timeSpan["yearStart"];			
		}
		// "250-400 BC", "250-400", "250-400 AD"
		elseif(preg_match_all('/^(\d+)-(\d+)\s?(AD|BC)?$/', $timeSpan["label"], $matches))
		{
			$timeSpan["yearStart"] = $matches[1][0];			
			$timeSpan["yearEnd"] = $matches[2][0];
			$isBC = ($matches[3][0] == 'BC');
			if($isBC)
			{
				$timeSpan["yearStart"] *= -1;
				$timeSpan["yearEnd"] *= -1;
			}
		}
		// "C1"
		elseif(preg_match_all('/^C(\d+)$/', $timeSpan["label"], $matches))
		{
			$centuryNo = $matches[1][0];
			$timeSpan = getCenturyYears($centuryNo, false,"", $timeSpan);							
		}
		// "C1-C2"
		elseif(preg_match_all('/^C(\d+)-C(\d+)$/', $timeSpan["label"], $matches))
		{
			$centuryNo1 = $matches[1][0];
			$centuryNo2 = $matches[2][0];
			$timeSpan1 = getCenturyYears($centuryNo1);
			$timeSpan2 = getCenturyYears($centuryNo2);
			$timeSpan["yearStart"] = $timeSpan1["yearStart"];
			$timeSpan["yearEnd"] = $timeSpan2["yearEnd"];
		}
		// other patterns to implement:
		// 11TH-12TH CENTURY AD
		// LC2/eC3
		// C2/C3
		// AD125-140/45
		// LC1-C2
		// C2+
		// c. AD 270
		
		//print $timeSpan["label"] . ": [" . $timeSpan["yearStart"] . ":" . $timeSpan["yearEnd"] . "]<br>";		
		$timeSpan = correctEndDate($timeSpan); // 364-75 means 364-375... so correct it...
		return($timeSpan);
		
	}

	// get start/end years for numbered century
	function getCenturyYears($centuryNo, $isBC=false, $prefix="", $timeSpan=null)
	{
		if($timespan = null)
			$timeSpan = array("label" => "", "yearStart" => $INVALID_YEAR, "yearEnd" => $INVALID_YEAR);
		
		// adjust boundaries if EARLY/MID/LATE qualifier is present
		// using invented boundaries: EARLY=1-40, MID=30-70, LATE=60-100
		if($isBC)
		{
			$timeSpan["yearStart"] = ($centuryNo * -100);
			switch($prefix) 
			{
				case "EARLY":						
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 40;
					break;
				case "MID":
					$timeSpan["yearStart"] += 30;
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 40;
					break;
				case "LATE":
					$timeSpan["yearStart"] += 60;
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 39;
					break;	
				default:
					// There is no year zero...
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 99;
					break;
			}	
		}				
		else // AD - start at year 1 no 0
		{
			$timeSpan["yearStart"] = ($centuryNo * 100) - 99;
			switch($prefix) 
			{
				case "EARLY":						
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 39;
					break;
				case "MID":
					$timeSpan["yearStart"] += 29;
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 40;
					break;
				case "LATE":
					$timeSpan["yearStart"] += 59;
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 40;
					break;	
				default:
					$timeSpan["yearEnd"] = $timeSpan["yearStart"] + 99;
					break;
			}		
		}

		return $timeSpan;
	}	

	// 364-75 means 364-375... so correct it...
	function correctEndDate($timeSpan)
	{
		//if(strlen($timeSpan["yearEnd"]) < strlen($timeSpan["yearStart"]))
		if($timeSpan["yearEnd"] >=0 && $timeSpan["yearEnd"] < $timeSpan["yearStart"])
		{
			$pos = strlen($timeSpan["yearStart"]) - strlen($timeSpan["yearEnd"]);
			$timeSpan["yearEnd"] = (int)substr_replace($timeSpan["yearStart"], $timeSpan["yearEnd"], $pos);
		}
		return $timeSpan;
	}

	// import delimited data file into array
	function getTabularDataFromFile($inputFileName)
	{

		$lines = explode("\n", file_get_contents($inputFileName));
		$head = str_getcsv(array_shift($lines));

		$data = array();
		foreach ($lines as $line) {
			$row = array_pad(str_getcsv($line), count($head), '');
			$data[] = array_combine($head, $row);
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

	// a few static tests
	/*
	echo "<h3>Period alignment static tests:</h3>";
	print_r(getPeriodDates("1st century BC"));print('<br>'); 	// [-100, -1]
	print_r(getPeriodDates("Early 1st century BC"));print('<br>'); // [-100, -60]
	print_r(getPeriodDates("Mid 1st century BC"));print('<br>');	// [-70, -30]
	print_r(getPeriodDates("Late 1st century BC"));print('<br>');	// [-40, -1]
	print_r(getPeriodDates("1st century"));	print('<br>');		// [1, 100]
	print_r(getPeriodDates("Early 1st century"));print('<br>');	// [1, 40]
	print_r(getPeriodDates("Mid 1st century"));print('<br>');		// [30, 70]
	print_r(getPeriodDates("Late 1st century"));print('<br>');		// [60, 100]
	print_r(getPeriodDates("2nd century BC"));print('<br>');		// -200, -101]
	print_r(getPeriodDates("3rd century AD"));print('<br>');		// [201, 300]
	
	print_r(getPeriodDates("AD400-600"));print('<br>');			// [400, 600]
	print_r(getPeriodDates("AD 800-900"));print('<br>');			// [800, 900]
	print_r(getPeriodDates("800 AD"));print('<br>');				// [800, 800]
	print_r(getPeriodDates("500 BC"));print('<br>');				// [-500, -500]
	print_r(getPeriodDates("AD 800"));print('<br>');				// [800, 800]
			
	print_r(getPeriodDates("SEVENTH CENTURY AD"));print('<br>');	// [601, 700]
	print_r(getPeriodDates("SECOND CENTURY BC"));print('<br>');	// [-200, -101]
	print_r(getPeriodDates("EARLY THIRD CENTURY"));print('<br>');	// [201, 240]	
	*/
?>

</body>
</html>