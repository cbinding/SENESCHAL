<?php
	/*
	================================================================================
	Creator		: Ceri Binding, University of South Wales
	Project		: SENESCHAL
	Service		: getConceptPrefLabel
	Params		: conceptURI
	Summary		: Get preferred labels for a concept 
	License		: http://creativecommons.org/licenses/by/3.0 
	================================================================================
	Example		:
	/getConceptPrefLabel.php?conceptURI=http://purl.org/heritagedata/schemes/mda_obj/concepts/96144
	================================================================================
	History	 :

	05/11/2013  CFB created class
	================================================================================
	*/	
	require_once("SeneschalAPI.php");
	
	header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours
	
	// defaults if input parameters not passed in
	$conceptURI = "";
    
	// get input parameters, ensure case insensitivity 
	foreach ($_REQUEST as $key => $value) {
		switch(strtolower($key)) {
			case "concepturi": $conceptURI = $value;
			break;
		}		
	}
	
	$api = new SeneschalAPI();
	$data = $api->getConceptPrefLabel($conceptURI);
	
	// convert the data to JSON format for return
	$json = str_replace('\\/', '/',  json_encode($data)); //, JSON_PRETTY_PRINT);

	# If a "callback" GET parameter was passed, use its value. User-provided callback names need filtering to prevent attack
	# "callback" is a de-facto standard for the JSONP function name, it may be called something else, or not implemented at all
	$jsonp_callback = isset($_REQUEST['callback']) ? preg_replace('/[^a-zA-Z0-9$_]/s', '', $_REQUEST['callback']) : false;
	# If a JSONP callback was specified, print the JSON data surrounded in that, otherwise just print out the JSON data.
	# Specifying no callback would print: {"some_key": "some_value"}
	# But specifying ?callback=foo would print: foo({"some_key": "some_value"})
	print ($jsonp_callback ? $jsonp_callback . '(' : '') . $json . ($jsonp_callback ? ')' : '');	
?>
