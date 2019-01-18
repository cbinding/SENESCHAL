<?php
	/*
	================================================================================
	Creator		: Ceri Binding, University of South Wales
	Project		: SENESCHAL
	Service		: getSchemes
	Params		: [verbose] - if present returns array of {[uri][property][value]}
							containing all triples, otherwise returns array of 
							{[uri][dct:title][dct:title lang]}
				  [limit] - limit the number of records returned in the array
				  [offset] - (zero based) offset for returned records  
				  [alias] - shorten full URIs by appying namespace alias prefix
				  [pretty] - uses whitespace/line breaks to pretty print the JSON output
	Summary		: List schemes currently in the datastore  
	License		: http://creativecommons.org/licenses/by/3.0 
	================================================================================
	Example		:
		/getSchemes.php?limit=10&alias
	================================================================================
	History	 :

	15/11/2013  CFB created script
	08/01/2018	CFB	Added optional 'language' parameter
	================================================================================
	*/	
	require_once("SeneschalAPI.php");
	require_once("uri.php");

	header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (24 * 60 * 60))); // cached for 24 hours
			
	// defaults if input parameters not passed in
	$verbose = false;
	$alias = false;
	$pretty = false;
	//$inverses = false;
	$limit = 0;
	$offset = 0;
	$language="en";
   
	// get input parameters, ensure case insensitivity 
	foreach ($_REQUEST as $key => $value) {
		switch(strtolower($key)) {
			case "verbose": $verbose = true;
			break;
			case "alias": $alias = true;
			break;
			case "limit": $limit = $value;
			break;
			case "offset": $offset = $value;
			break;
			case "pretty": $pretty = true;
			break;	
			case "language": $language = $value;
			break;			
		}
	}
	
	// get the top concepts for the specified scheme
	$api = new SeneschalAPI();
	$data = $api->getSchemes($verbose, $limit, $offset, $language);
	
	// convert the data to JSON format for return
	//$json = str_replace('\\/', '/', json_encode($data));	
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
	# Specifying no callback would print: {"some_key": "some_value"}
	# But specifying ?callback=foo would print: foo({"some_key": "some_value"})
	#this methid returned a file:
	#if($jsonp_callback)
	#{
		#header('Content-Type: text/javascript; charset=utf8');
		//header('Access-Control-Allow-Origin: http://www.heritagedata.org/');
		//header('Access-Control-Max-Age: 3628800');
		//header('Access-Control-Allow-Methods: GET');

		#echo $jsonp_callback . '(' . $json . ');';		
	#}
	#else
	#{
		// normal JSON string
		#header('Content-Type: application/json; charset=utf8');
		#echo $json;
	#}
	print ($jsonp_callback ? $jsonp_callback . '(' : '') . $json . ($jsonp_callback ? ')' : '');	
?>
