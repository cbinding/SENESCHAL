<?php
	/*
	================================================================================
	Creator		: Ceri Binding, University of South Wales
	Project		: SENESCHAL
	Service		: getAllASchemes
	Params		: list all schemes in the store as a html table
	License		: http://creativecommons.org/licenses/by/3.0 
	================================================================================
	History	 :

	14/11/2013  CFB created class
	================================================================================
	*/
	include_once("SeneschalAPI.php");
	
	$api = new SeneschalAPI();
	$rows = $api->getSchemes();
	
	echo $api->getHtmlHeader();
	echo schemesToHtmlTable($rows);
	echo $api->getHtmlFooter();
	
	function schemesToHtmlTable($rows){
		// group rows by attributionName
		$arr = array();
		foreach ($rows as $row) {		
			$attributionName = $row['attribution'];
			if(!array_key_exists($attributionName, $arr))
				$arr[$attributionName] = array();
			array_push($arr[$attributionName], $row);	
		}
		// sort by attributionName alphabetically 
		ksort($arr, SORT_NATURAL | SORT_FLAG_CASE);

		// build HTML output
		$s = "";
		foreach($arr as $key=>$values)
		{
			// create header item per attributionName
			$s .= "<h3>" . $key . "</h3>";	

			// build table of thesauri for this particular attributionName
			$s .= "<table class='properties' style='border-spacing:0;border-collapse:collapse;padding:3;'>
				<thead><tr><th style='width:30%;'>Scheme</th><th style='width:65%;'>Description</th></tr></thead><tbody>";
			foreach ($values as $value)
			{
				$s .= "<tr>";
				$s .= "<td style='width:30%;'>";
					$s .= "<a class='scheme' href='" . $value['uri'] . "'>";
					if (isset( $value['label']))
						$s .=  $value['label'];
					else
						$s .=  $value['uri'];
					$s .= "</a>";
				$s .= "</td>";
				$s .= "<td style='width:65%;'>";
				if (isset($value['description']))
					$s .= "&nbsp;" . $value['description'];
				else
					$s .= " ";
				$s .= "</td>";
				$s .= "</tr>";
			}
			$s .= "</tbody></table>";
			$s .= "<p>&nbsp;</p>";		
		}		
		return $s;
	}	
?>
