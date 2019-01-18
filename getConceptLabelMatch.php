<?php
	/*
	================================================================================
	Creator		: Ceri Binding, University of South Wales
	Project		: SENESCHAL
	Service		: getConceptLabelMatch 
	Params		: schemeURI [startsWith=''][contains=''][limit=0][offset=0][alias][pretty]
	Summary		: Get labels from specified scheme matching specified criteria 
	License		: http://creativecommons.org/licenses/by/3.0 
	================================================================================
	Example		:
	/getConceptLabelMatch.php?schemeURI=http://purl.org/heritagedata/schemes/eh_tmt2&startsWith=roun&limit=10
	================================================================================
	History	 :

	21/10/2013  CFB created script
	08/01/2019	CFB	Added optional 'language' parameter
	================================================================================
	*/	
	require_once("SeneschalAPI.php");
	require_once("uri.php");

	header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours
	
	// defaults if input parameters not passed in
	$schemeURI = "";
	$startsWith = "";
	$contains = "";
	$limit = 0;
    $offset = 0;
	$alias = false;
	$pretty = false;
	$language = "en";

	// get input parameters. Note: startsWith and contains may be used together
	// get input parameters, ensure case insensitivity 
	foreach ($_REQUEST as $key => $value) {
		switch(strtolower($key)) {
			case "schemeuri": $schemeURI = $value;
			break;
			case "startswith": $startsWith = $value;
			break;
			case "contains": $contains = $value;
			break;
			case "limit": $limit = $value;
			break;
			case "offset": $offset = $value;
			break;
			case "alias": $alias = true;
			break;
			case "pretty": $pretty = true;
			break;
			case "language": $language = $value;
			break;
		}		
	}	
	
	// get the matching labels
	$api = new SeneschalAPI();
	$data = $api->getConceptLabelMatch($schemeURI, $startsWith, $contains, $limit, $offset, $language);
	
	// convert the data to JSON format for return
	// $json = str_replace('\\/', '/', json_encode($data));	
	// if server PHP version upgrades to >=PHP 5.4, we can do it like this instead:
	$json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
	
	// apply namespace alias prefixes
	if($alias) $json = abbreviateURI($json);
	// pretty print json output
	if($pretty) $json = indent($json);
	
	# If a "callback" GET parameter was passed, use its value. User-provided callback names need filtering to prevent attack
	# "callback" is a de-facto standard for the JSONP function name, it may be called something else, or not implemented at all
	$jsonp_callback = isset($_REQUEST['callback']) ? preg_replace('/[^a-zA-Z0-9$_]/s', '', $_REQUEST['callback']) : false;
	# If a JSONP callback was specified, print the JSON data surrounded in that, otherwise just print out the JSON data.
	# Specifying no callback prints: {"some_key": "some_value"} but specifying ?callback=foo prints: foo({"some_key": "some_value"})
	//header('Content-Type: application/json');
	print ($jsonp_callback ? $jsonp_callback . '(' : '') . $json . ($jsonp_callback ? ')' : '');			
?>
