<?php
/*
================================================================================
Creator		: Ceri Binding, University of South Wales
Project		: SENESCHAL
Classes		: 
Require		: ARC2 RDF library for PHP [See https://github.com/semsol/arc2]
Summary		: Get all RDF properties for specified resource URI
License		: CC-BY - Creative Commons Attribution
================================================================================
History	 :

14/11/2013 CFB Created script
================================================================================
*/
	include_once("SeneschalAPI.php");
	include_once("uri.php");
	
	// default variable values
	$scheme = null;
	$concept = null;
	$format = "html";

	// output data file name
	$docname = "seneschal";
	$uri = "http://purl.org/heritagedata";
			
	// override defaults with passed in values
	if(!empty($_GET['scheme'])) {
		$scheme = trim($_GET["scheme"]);
		$uri .= "/schemes/" . $scheme;
		$docname .= "-" . $scheme;
	}
	if(!empty($_GET['concept'])) {
		$concept = trim($_GET["concept"]);
		$uri .= "/concepts/" . $concept;
		$docname .= "-" . $concept;		
	}	
	if(!empty($_GET['format'])) {
		$format = strtolower(trim($_GET["format"]));
		$docname .= "." . $format;
	}
	
	//echo "<p>Scheme: " . $scheme . 
	//"<br>Concept: " . $concept . 
	//"<br>Format: " .$format . 
	//"<br>Docname: " . $docname . "</p>";

	// get the raw triples describing the requested resource
	$api = new SeneschalAPI();
	$data = $api->getResource($uri, $format);

	// possible output formats are rdf, ttl, n3, json, html		
	switch ($format)
	{
		case "rdf":
			header('Content-Type: application/rdf+xml');
			header('Content-disposition: attachment; filename=' . $docname);	
			header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours	
			echo $data;
			break;
		case "ttl":
			header('Content-Type: text/turtle');
			header('Content-disposition: attachment; filename=' . $docname);
			header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours	
			echo $data;
			break;
		case "n3":
			header('Content-Type: text/n3');
			header('Content-disposition: attachment; filename=' . $docname);
			header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours	
			echo $data; 
			break;
		case "json":
			header('Content-Type: application/json');
			header('Content-disposition: attachment; filename=' . $docname);
			header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours	
			echo $data;
			break;
		default: // "html"
			header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); //cache page for 24 hours
			header('Content-Type: text/html');
			$s = $api->getHtmlHeader(); 
			$s .= resultsToHtmlTable($data, $api);	
			$s .= $api->getHtmlFooter(); 
			echo $s;
			break;
	}	
	
	function resultsToHtmlTable($data, $api) {
		$uri = "";
		$s = "<table class='properties' style='border-spacing:0;border-collapse:collapse;padding:0;'>
			<thead><tr><th>Property</th><th>Value</th></tr></thead>";
		$triples = ARC2::getTriplesFromIndex($data);
		foreach ($triples as $triple) {
			if(empty($uri))
				$uri = $triple['s'];
			$s .= "<tr><td style='width:25%;'><a href='" . $triple['p'] . "'>" .  abbreviateURI($triple['p']) . "</a></td><td style='width:70%;'>";
			switch($triple['o_type']) {
				case "uri":
				case "bnode":
					// try to replace skos:Concept URIs with label
					$label = $triple['o'];
					$targetClass="";
					if($triple['p'] === URI_SKOS_BROADER 
					|| $triple['p'] === URI_SKOS_NARROWER
					|| $triple['p'] === URI_SKOS_RELATED
					|| $triple['p'] === URI_SKOS_HASTOPCONCEPT)
					{
						$targetClass="concept";
						$prefLabel = $api->getPrefLabel($triple['o']); 
						if($prefLabel !== "") {
							$label = $prefLabel;
						}
						// create link to a google search on the label
						//$s .= "&nbsp; <a href='http://www.google.co.uk/search?q=" . urlencode(trim($label)) . "'>[google]</a>";
					}
					// try to replace skos:ConceptScheme URIs with title
					if($triple['p'] === URI_SKOS_INSCHEME 
					|| $triple['p'] === URI_SKOS_TOPCONCEPTOF)
					{
						$targetClass="scheme";
						$title = $api->getSchemeTitle($triple['o']);
						if($title !== "")
							$label = $title;						
					}					
					$s .= '<a class="' . $targetClass . '" href="' . $triple['o'] . '">' . htmlspecialchars(abbreviateURI($label)) . '</a>';						
					
					break;
				case "literal":
				case "var":
					if($triple['p'] === URI_SKOS_PREFLABEL)
						$s .= '<strong>' . htmlspecialchars($triple['o']) . '</strong>';
					else
						$s .= htmlspecialchars($triple['o']);
					if(!empty($triple['o_lang']) && $triple['o_lang'] !== 'en')
						$s .= " [" .  $triple['o_lang'] . "]";	
					break;
			}
			$s .= '</td></tr>';		
		 }

		$s .= "</table>";
		if(!empty($uri)) {
			// 25/02/2014 CFB - added link to generate QR Code for concept/scheme URI			
			$s = "<h4 class='centered'>" . $uri . "&nbsp;&nbsp;(<a href='http://chart.apis.google.com/chart?cht=qr&chl=" . $uri . "&chs=240x240'>QR Code</a>)</h4> " . $s;
			$s .= "<h4 class='centered'>RDF downloads (<a href='" . $uri . ".n3'>N-Triples</a> <a href='" . $uri . ".ttl'>Turtle</a> <a href='" . $uri . ".json'>JSON</a> <a href='" . $uri . ".rdf'>XML</a>)</h4>";				
		}

		return $s;
	}

?>
