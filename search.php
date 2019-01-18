<?php 
	//session_start();
	//include_once("config.php");
	//include_once("SENESCHAL.php");
	include_once("SeneschalAPI.php");

	//$seneschal = new SENESCHAL($config);

	$api = new SeneschalAPI();	
	
	$scheme = empty($_REQUEST["scheme"]) ? "" : $_REQUEST["scheme"];
	$searchfor = empty($_REQUEST["searchfor"]) ? "" : $_REQUEST["searchfor"];
	
?>

<?php 
	echo $api->getHtmlHeader(); 
?>	
<form action="<?php $PHP_SELF ?>" method="get" enctype="multipart/form-data">
<fieldset><legend>Search</legend>
<label>Scheme:</label>
<?php echo $api->getSchemeSelector($scheme); ?>
&nbsp;<label>Label:</label>
<input type='text' id='searchfor' name='searchfor' value='<?php echo $searchfor ?>' />
<input type='submit' name='submit' value='Submit'>
</fieldset>
</form>
<div id="results">
<?php 
	if(!empty($searchfor))
	{
		//$matches = $api->getConceptLabelMatch($scheme, $searchfor);		
		$matches = $api->getConceptLabelMatch($scheme, '', $searchfor, 100);		
		echo matchesToHTML($matches, $searchfor);
	}

	// compare input labels to scheme labels - get best match
	function matchesToHTML($matches, $q)
	{
		// user defined sorting function 
		function compareMatches($a, $b)
		{
			if ($a['label'] == $b['label']) {
				return 0;
			}
			return ($a['label'] < $b['label']) ? -1 : 1;
		}
		usort($matches, "compareMatches");						
		
		// build unordered list of results
		$s = "<div>" . count($matches) . " matches returned for search on '" . htmlspecialchars($q) . "'</div>";
		if(count($matches) === 100)
			$s .= "<div>Note - search returns a maximum of 100 results. If the term you are looking for is not present try refining your search</div>";
		if(!empty($matches)) {
			
			$s .= "<ul>";		
			foreach ($matches as $row)
			{	
				// highlight matched part within label
				$label = htmlspecialchars($row['label']);
				$label = preg_replace("/(" . $q . ")/i", "<span class='hilite'>$0</span>", $label);
				
				// note might not actually be present...
				$note = empty($row["note"]) ? "" :  htmlspecialchars($row["note"]);
				
				// create the listitem
				$s .= "<li>";
				$s .= "<a class='concept' href='" . $row['uri'] . "'>" . $label . "</a><br/>";
				$s .= "<div><small><strong>" . $row['uri'] . "</strong></small></div>";
				$s .= "<div>" . $note . "</div><br>";
				$s .= "</li>";
			}	
			$s .= "</ul>";
		}		
		return $s;
	}
?>
</div><!--#results-->
<?php echo $api->getHtmlFooter(); ?>