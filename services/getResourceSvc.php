<?php
	/*
	================================================================================
	Creator		: Ceri Binding, University of South Wales
	Project		: SENESCHAL
	Service		: getResourceSvc
	Params		: uri [pretty]
	Summary		: Get description of a resource (scheme or concept) 
	License		: http://creativecommons.org/licenses/by/3.0 
	================================================================================
	Example		:
	/services/getResource.php?uri=http://purl.org/heritagedata/schemes/mda_obj
	================================================================================
	History	 :

	05/11/2013  CFB created class
	================================================================================
	*/
	//session_start(); //check - required any more??
	//TODO: look into caching

	include_once("SeneschalAPI.php");

	header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours
		
	// defaults if input parameters not passed in
	$uri = "";
	$pretty = false;
	 
	// get input parameters, ensure case insensitivity 
	foreach ($_REQUEST as $key => $value) {
		switch(strtolower($key)) {
			case "uri": $uri = $value;
			break;	
			case "pretty": $pretty = true;
			break;			
		}		
	}
	
	// get the scheme list
	$api = new SeneschalAPI();
	$data = $api->getResource($uri);
	
	// convert the data to JSON format for return
	$json = $pretty ? indent(json_encode($data)) : json_encode($data);
	$json = str_replace('\\/', '/', $json); 
	// if server upgrades to >=PHP 5.4, we can do this on one line instead:
	// $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
	
	# If a "callback" GET parameter was passed, use its value. User-provided callback names need filtering to prevent attack
	# "callback" is a de-facto standard for the JSONP function name, it may be called something else, or not implemented at all
	$jsonp_callback = isset($_REQUEST['callback']) ? preg_replace('/[^a-zA-Z0-9$_]/s', '', $_REQUEST['callback']) : false;
	# If a JSONP callback was specified, print the JSON data surrounded in that, otherwise just print out the JSON data.
	# Specifying no callback would print: {"some_key": "some_value"}
	# But specifying ?callback=foo would print: foo({"some_key": "some_value"})
	//header('Content-Type: application/json');
	print ($jsonp_callback ? $jsonp_callback . '(' : '') . $json . ($jsonp_callback ? ')' : '');
?>
