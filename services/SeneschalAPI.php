<?php
/*
================================================================================
Creator		: Ceri Binding, University of South Wales
Project		: SENESCHAL
Classes		: SeneschalAPI, ReturnType
Require		: ARC2 RDF library for PHP [See https://github.com/semsol/arc2]
Summary		: central class to do all the main SENESCHAL data retrieval work 
License		: CC-BY - Creative Commons Attribution
================================================================================
Example		:
	<?php
		$api = new SeneschalAPI(); 
		$lst = $api->getSchemeList();
	?>
================================================================================
History	 :

21/10/2013 CFB created class
================================================================================
*/
require_once("../arc2-master/ARC2.php");
require_once("config.php");

class ReturnType
{
	const RAW = "raw";
	const ROWS = "rows";
}

class SeneschalAPI
{		
	// class constructor
	function SeneschalAPI() {
		global $config;
		if(empty($this->store)) {
			$this->store = ARC2::getStore($config['db']);
		}
		if (!$this->store->isSetUp()) {
			$this->store->setUp();
		}		
	}	


	// Run SPARQL SELECT query against the current data store
	private function sparqlSelect($sparql, $returnType=ReturnType::ROWS)
	{	
		// ensure valid input parameters
		if($returnType != ReturnType::RAW)
			$returnType = ReturnType::ROWS;
		
		$data = $this->store->query($sparql, $returnType);
		if ($this->store->getErrors()) 
		{	
			error_log( "sparqlSelect - errors" . $sparql);
			throw new Exception("sparqlSelect - errors. [" . $sparql . "]", 0);			
		}		
		return $data;
	}		

	public function getBaseUri()
	{
		return $config['baseURI'];
	}

	// 31/01/2014 - moved from SENESCHAL.php
	public function getHtmlHeader() {
		$s = "<!DOCTYPE html>
			<html>
			<head>
			<title>Heritage Data: Linked Data Vocabularies for Cultural Heritage</title>
			<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
			<meta charset='utf-8'>	
			<!--<meta HTTP-EQUIV='EXPIRES' CONTENT='Mon, 22 Jul 2002 11:12:01 GMT'>-->
			<meta name='Author' content='Ceri Binding, University of South Wales'>
			<link rel='stylesheet' href='http://www.heritagedata.org/live/styles.css' media='all'>
			<link rel='shortcut icon' href='http://www.heritagedata.org/live/favicon.ico' />

			</head>
			<body>
			<div id='main'><!--start div#main wrapper-->
			<div id='header'><!--start div#header-->			
			<img src='http://www.heritagedata.org/live/bannerfans_8217281.png' style='width:600; height:90; border:0;' alt='Heritage Data'>
			<div id='navcontainer'><!--start div#navcontainer-->
			<ul id='navlist'><!--start ul#navlist-->
				
				<li><a href='/live/getAllSchemes.php'>Scheme List</a></li>
				<li><a href='/live/searchForm.php'>Concept Search</a></li>
				<li><a href='/live/sparql.php'>SPARQL Query</a></li>
				<li><a href='http://www.heritagedata.org/blog'>About The Project</a></li>
				
			</ul><!--end ul#navlist-->
			</div><!--end div#navcontainer-->
			</div><!--end div#header-->
			<div id='content'><!--start div#content-->";
		return $s;
	}

	// 31/01/2014 - moved from SENESCHAL.php
	function getHtmlFooter() {
		$s = "</div><!--end div#content-->
			<div id='footer'><!--start div#footer-->
			<small>Except where otherwise noted, data content on this site is licensed by the respective attributed organisations under a 
			<a href='http://creativecommons.org/licenses/by/3.0'>Creative Commons Attribution 3.0 License</a></small>
			</div><!--end div#footer-->
			</div><!--end div#main-->
			</body>
			</html>";
		return $s;
	}

	// 31/01/2014 - moved from SENESCHAL.php
	// returns a <select> tag populated with all ConceptSchemes, grouped by attributionName
	function getSchemeSelector($currentSchemeURI = null) {
		$s = "<select name='scheme' id='scheme'>";
		
		$schemes = $this->getSchemeList();		
		// group and sort schemes alphabetically by attributionName
		$arr = array();
		foreach ($schemes as $scheme) {		
			$attributionName = $scheme['attributionName'];
			if(!array_key_exists($attributionName, $arr))
				$arr[$attributionName] = array();		
			array_push($arr[$attributionName], $scheme);	
		}
		ksort($arr, SORT_NATURAL | SORT_FLAG_CASE);

		// build the separate option groups		
		foreach($arr as $key=>$values)
		{
			// create option group tag for each attributionName
			$s .= "<optgroup label='" . $key . "'>";			
			foreach ($values as $value)
			{
				// create option tag for each scheme listed under this attribution name
				$s .= "<option class='scheme' value='" . $value['uri'] . "'";
				if(!empty($currentSchemeURI) && $currentSchemeURI === $value['uri'])
					$s .= " selected";
				$s .= ">";
				// preferably display title, else URI
				if (!empty($value['title']))
					$s .=  $value['title'];
				else
					$s .=  $value['uri'];
				//close option tag
				$s .= "</option>";			
			}
			//close option group tag
			$s .= "</optgroup>";
		}
		$s .= "</select>";		
		return $s;	
	}

	// List ConceptSchemes currently in the store. Returns a multidimensional array: 
	// [0] => Array(['uri']['title']['description']['attributionName']) 
	// [1] => Array(['uri']['title']['description']['attributionName']) (etc.)	
	public function getSchemeList($maxRows=0, $returnType=ReturnType::ROWS)
	{
		// ensure valid input parameters
		if(is_numeric($maxRows))
			$maxRows = floor(abs($maxRows));
		else
			$maxRows = 0;		

		// build the SPARQL query
		$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
			PREFIX dcterms: <http://purl.org/dc/terms/>
			PREFIX cc: <http://creativecommons.org/ns#>
			SELECT ?uri ?title ?description ?attributionName WHERE 
			{
				?uri a skos:ConceptScheme .
				OPTIONAL { ?uri dcterms:title ?title }
				OPTIONAL { ?uri dcterms:description ?description }
				OPTIONAL { ?uri cc:attributionName ?attributionName }
			}
			ORDER BY ?attributionName ?title";
		if($maxRows > 0)
			$sparql .= " LIMIT " . $maxRows;

		// run the SPARQL query
		$data = $this->sparqlSelect($sparql, $returnType);

		// anonymous inline functions don't (currently) work on server as PHP version is 5.2.17,
		// so declaring named nested function instead, to use with array_map in next step
		// $data is initially a multidimensional array containing some fields we won't really need:
		// [0] => Array([uri] => 'http://xxx' [uri type] => 'uri' [title] => 'xxxx' [title type] => 'literal' [title lang] => 'en'))
		// [1] => Array([uri] => 'http://yyy' [uri type] => 'uri' [title] => 'yyyy' [title type] => 'literal' [title lang] => 'en'))
		// so reduce returned data to multidimensional array containing just [uri][title][title lang][description][description lang][attributionName]:
		// [0] => Array([uri] => 'http://xxx' [title] => 'xxxx' [description] => 'gggg' [attributionName] => 'kkkk')
		if($returnType == ReturnType::ROWS)
		{
			function reduceArray($row) {
				return Array(
					"uri" => $row['uri'], 
					"title" => $row['title'], 
					"title lang" => $row['title lang'], 
					"description" => $row['description'], 
					"description lang" => $row['description lang'], 
					"attributionName" => $row['attributionName']
					);
			}
			$data = array_map("reduceArray", $data);
			/*$data = array_map(
					function($row){
						return Array("uri" => $row['uri'], "title" => $row['title'], "title lang" => $row['title lang'], "description" => $row['description'], "description lang" => $row['description lang'], "attributionName" => $row['attributionName']);
					}, $data);*/
		}
				
		return $data;
	}	

	// List Concepts for specified scheme. Returns raw data or a multidimensional array: 
	// [0] => Array(['uri']['label']['label lang'])
	// [1] => Array(['uri']['label']['label lang']) (etc.)
	public function getConceptList($schemeURI, $maxRows=0, $returnType=ReturnType::ROWS)
	{
		// ensure valid input parameters		
		if (!$schemeURI)
		{
			$msg = "getConceptList - no schemeURI was specified";
			error_log($msg);
			throw new Exception($msg, 0);	
			return null;
		}

		if(is_numeric($maxRows))
			$maxRows = floor(abs($maxRows));
		else
			$maxRows = 0;	

		// build the SPARQL query
		$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
			SELECT ?uri ?label WHERE 
			{
				?uri skos:inScheme <" . $schemeURI . "> ; skos:prefLabel ?label .
			}";
		if($maxRows > 0)
			$sparql .= " LIMIT " . $maxRows;

		// run the SPARQL query
		$data = $this->sparqlSelect($sparql, $returnType);
		
		/* doesn't currently work on server as PHP version is 5.2.17, doesnt support anonymous functions
		if($returnType == ReturnType::ROWS)
		{
			// $data is a multidimensional array containing some fields we don't really need to return: 
			// [0] => Array([uri] => 'http://xyx'  [uri type] => 'uri' [label] => 'xxxx' [label type] => 'literal' [label lang] => 'en')	
			// so reduce data to multidimensional array containing just uri label lang:
			// [0] => Array([uri] => 'http://xyx' [label] => 'xxxx' [label lang] => 'en')	
			$data = array_map(
				function($row){
					return Array("uri" => $row['uri'], "label" => $row['label'], "label lang" => $row['label lang']);
				}, $data);
		}*/
		
		return $data;
	}

	//getSchemes supersedes getSchemeList...
	public function getSchemes($verbose=false, $limit=0, $offset=0)
	{	
		// clean up input parameters
		if(is_numeric($limit))
			$limit = floor(abs($limit));
		else
			$limit = 0;	

		if(is_numeric($offset))
			$offset = floor(abs($offset));
		else
			$offset = 0;

		if($verbose == true)
		{
			// build the verbose SPARQL query			
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				SELECT ?uri ?property ?value WHERE { 
					?uri a skos:ConceptScheme; ?property ?value . 
				}"; // ORDER BY ?uri
			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the verbose SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);	

			// function to remove unrequired columns
			function reduceArray($row) {
				$keysToIgnore = array('uri type', 'property type', 'value type');
				foreach($row as $key=>$value){
					if (in_array($key, $keysToIgnore)) unset($row[$key]);					
				};
				return $row;
			}
			
			// remove unrequired columns from results
			$data = array_map("reduceArray", $data);

			// return the results
			return $data;
		}
		else
		{
			// build the non-verbose SPARQL query	
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				PREFIX dct: <http://purl.org/dc/terms/>
				PREFIX cc: <http://creativecommons.org/ns#>

				SELECT DISTINCT ?uri ?label ?description ?attribution WHERE { 
					?uri a skos:ConceptScheme; dct:title ?label .
					OPTIONAL { ?uri cc:attributionName ?attribution }
					OPTIONAL { ?uri dct:description ?description }
				}"; // ORDER BY ?attributionName ?title";

			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the non-verbose SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);
			
			// function to include (&rename) only selected columns
			function reduceArray($row) {
				return Array(
					"uri" => $row['uri'], 
					"label" => $row['label'], 
					"label lang" => $row['label lang'],
					"description" => $row['description'],
					"attribution" => $row['attribution']
				);
			}

			// include (&rename) only selected columns
			$data = array_map("reduceArray", $data);
			
			// return the results
			return $data;
		}
	}
	
	// experimental functionality for ARCHES
	public function getTopConceptsForScheme($schemeURI, $verbose=false, $limit=0, $offset=0)
	{
		// if no scheme specified, just return empty array
		if (!$schemeURI)
			return array();	
		
		// clean up input parameters
		if(is_numeric($limit))
			$limit = floor(abs($limit));
		else
			$limit = 0;	

		if(is_numeric($offset))
			$offset = floor(abs($offset));
		else
			$offset = 0;

		if($verbose == true)
		{
			// build the verbose SPARQL query			
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				SELECT ?uri ?property ?value WHERE { 
					?uri skos:topConceptOf <" . $schemeURI . "> ; ?property ?value . 
				}"; // ORDER BY ?uri";
			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the verbose SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);	

			// function to remove unrequired columns
			function reduceArray($row) {
				$keysToIgnore = array('uri type', 'property type', 'value type');
				foreach($row as $key=>$value){
					if (in_array($key, $keysToIgnore)) unset($row[$key]);					
				};
				return $row;
			}
			
			// remove unrequired columns from results
			$data = array_map("reduceArray", $data);

			// return the results
			return $data;
		}
		else
		{
			// build the non-verbose SPARQL query	
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				SELECT DISTINCT ?uri ?label WHERE { 
					?uri skos:topConceptOf <" . $schemeURI . "> ; skos:prefLabel ?label . 
				}"; // ORDER BY ?uri";
			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the non-verbose SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);
			
			// function to include (&rename) only selected columns
			function reduceArray($row) {
				return Array(
					"uri" => $row['uri'], 
					"label" => $row['label'], 
					"label lang" => $row['label lang']
				);
			}

			// include (&rename) only selected columns
			$data = array_map("reduceArray", $data);
			
			// return the results
			return $data;
		}
	}	

	public function getConceptRelations($conceptURI, $verbose=false, $limit=0, $offset=0)
	{
		// if no concept specified, just return empty array
		if (!$conceptURI)
			return array();	
		
		// clean up input parameters
		if(is_numeric($limit))
			$limit = floor(abs($limit));
		else
			$limit = 0;	

		if(is_numeric($offset))
			$offset = floor(abs($offset));
		else
			$offset = 0;

		if($verbose == true)
		{
			// build the verbose SPARQL query			
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				SELECT ?uri ?property ?value WHERE { 
				{ <" . $conceptURI . "> skos:broader ?uri }
				UNION
				{ <" . $conceptURI . "> skos:narrower ?uri }
				UNION
				{ <" . $conceptURI . "> skos:related ?uri }
				?uri ?property ?value }";
			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the verbose SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);	

			// function to remove unrequired columns
			function reduceArray($row) {
				$keysToIgnore = array('uri type', 'property type', 'value type');
				foreach($row as $key=>$value){
					if (in_array($key, $keysToIgnore)) unset($row[$key]);					
				};
				return $row;
			}
			
			// remove unrequired columns from results
			$data = array_map("reduceArray", $data);

			// return the results
			return $data;
		}
		else
		{
			// build the non-verbose SPARQL query	
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				SELECT ?property ?uri ?label WHERE { 
					{ <" . $conceptURI . "> skos:broader ?uri; ?property ?uri }
					UNION
					{ <" . $conceptURI . "> skos:narrower ?uri; ?property ?uri }
					UNION
					{ <" . $conceptURI . "> skos:related ?uri; ?property ?uri }
					OPTIONAL { ?uri skos:prefLabel ?label }
				}"; 
			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the non-verbose SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);
			
			// function to include (&rename) only selected columns
			function reduceArray($row) {
				return Array(
					"property" => $row['property'],
					"uri" => $row['uri'], 
					"label" => $row['label'], 
					"label lang" => $row['label lang']
				);
			}

			// include (&rename) only selected columns
			$data = array_map("reduceArray", $data);
			
			// return the results
			return $data;
		}
	}	

	public function getConceptLabels($conceptURI, $limit=0, $offset=0)
	{
		// if no concept specified, just return empty array
		if (!$conceptURI)
			return array();	
		
		// clean up input parameters
		if(is_numeric($limit))
			$limit = floor(abs($limit));
		else
			$limit = 0;	

		if(is_numeric($offset))
			$offset = floor(abs($offset));
		else
			$offset = 0;
		
		// build the non-verbose SPARQL query	
		$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
			SELECT ?property ?label WHERE { 
				{ <" . $conceptURI . "> skos:prefLabel ?label; ?property ?label }
				UNION
				{ <" . $conceptURI . "> skos:altLabel ?label; ?property ?label }				
			}"; 
		if($limit > 0)
			$sparql .= " LIMIT " . $limit;
		if($offset > 0)
			$sparql .= " OFFSET " . $offset;

		// run the non-verbose SPARQL query
		$data = $this->sparqlSelect($sparql, ReturnType::ROWS);
		
		// function to include (&rename) only selected columns
		function reduceArray($row) {
			return Array(
				"property" => $row['property'],
				"label" => $row['label'], 
				"label lang" => $row['label lang']
			);
		}

		// include (&rename) only selected columns
		$data = array_map("reduceArray", $data);
		
		// return the results
		return $data;
		
	}	

	public function getConceptsForScheme($schemeURI, $verbose=false, $limit=0, $offset=0)
	{		
		// if no scheme specified, just return empty array
		if (!$schemeURI) return array();	
		
		// clean up input parameters
		if(is_numeric($limit))
			$limit = floor(abs($limit));
		else
			$limit = 0;	

		if(is_numeric($offset))
			$offset = floor(abs($offset));
		else
			$offset = 0;

		if($verbose == true)
		{
			// build the verbose SPARQL query
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				SELECT ?uri ?property ?value WHERE { 
					?uri skos:inScheme <" . $schemeURI . "> ; ?property ?value .
				}"; // ORDER BY ?uri";
			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);				
			
			// function to remove unrequired columns
			function reduceArray($row) {
				$keysToIgnore = array('uri type', 'property type', 'value type');
				foreach($row as $key=>$value){
					if (in_array($key, $keysToIgnore)) unset($row[$key]);					
				};
				return $row;
			}		
			
			// remove unrequired columns from results
			$data = array_map("reduceArray", $data);

			// return the results
			return $data;
		}
		else
		{
			// build the non-verbose SPARQL query
			$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
				SELECT DISTINCT ?uri ?label WHERE { 
					?uri skos:inScheme <" . $schemeURI . "> ; 
					skos:prefLabel ?label .
				}"; // ORDER BY ?uri";
			if($limit > 0)
				$sparql .= " LIMIT " . $limit;
			if($offset > 0)
				$sparql .= " OFFSET " . $offset;

			// run the SPARQL query
			$data = $this->sparqlSelect($sparql, ReturnType::ROWS);

			// function to include (and rename) only selected columns
			function reduceArray($row) {
				return Array(
					"uri" => $row['uri'], 
					"label" => $row['label'], 
					"label lang" => $row['label lang']
				);
			}

			// include (&rename) only selected columns
			$data = array_map("reduceArray", $data);
			
			// return the results
			return $data;
		}		
	}
	// end experimental functionality for ARCHES


	// List concept labels for specified ConceptScheme matching parameters. Returns a multidimensional array: 
	// [0] => Array([uri] => 'http://xxx' [label] => 'xxxx')	
	// [1] => Array([uri] => 'http://yyy' [label] => 'yyyy')			
	public function getConceptLabelMatch($schemeURI, $startsWith='', $contains='', $limit=0, $offset=0)
	{
		// if no scheme specified, just return empty array
		if (!$schemeURI) return array();	
						
		$startsWith = trim($startsWith);
		$contains = trim($contains);

		if(is_numeric($limit))
			$limit = floor(abs($limit));
		else
			$limit = 0;	

		if(is_numeric($offset))
			$offset = floor(abs($offset));
		else
			$offset = 0;

		// build the SPARQL query to retrieve the data
		$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>			
			SELECT ?uri ?label WHERE 
			{
				?uri skos:inScheme <" . $schemeURI . "> . 
				{ ?uri skos:prefLabel ?label } UNION { ?uri skos:altLabel ?label } .";
		if($startsWith != '')
			$sparql .= " FILTER(REGEX(?label, '^" . $startsWith . "', 'i')) . ";
		if($contains != '')
			$sparql .= " FILTER(REGEX(?label, '" . $contains . "', 'i')) . ";
		$sparql .= "}"; // ORDER BY ?label";
		if($limit > 0)
			$sparql .= " LIMIT " . $limit;
		if($offset > 0)
			$sparql .= " OFFSET " . $offset;

		// run the SPARQL query
		$data = $this->sparqlSelect($sparql, ReturnType::ROWS);
		
		// function to include (and rename) only selected columns
		//TODO: 'label' is inconsistent with use of prefixed fields in other functions...
		function reduceLabelArray($row) {
			return Array(
				"uri" => $row['uri'], 
				"label" => $row['label'], 
				"label lang" => $row['label lang']
			);
		}

		// include (&rename) only selected columns
		$data = array_map("reduceLabelArray", $data);
			
		// return the results
		return $data;
	}

	// check whether a concept with this label exists in the specified scheme
	// match is case insensitive prefLabel OR altLabel, returns true or false
	public function getConceptExists($schemeURI, $label='')
	{
		// ensure valid input parameters
		if (!$schemeURI) return false;

		$label = trim($label);
		
		// build the SPARQL query to retrieve the data
		$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>			
			ASK WHERE 
			{
				?uri skos:inScheme <" . $schemeURI . "> .
				{ ?uri skos:prefLabel ?label } UNION { ?uri skos:altLabel ?label } .
				FILTER(REGEX(?label, '^" . $label . "\\$', 'i')) . 
			}";		

		// run the SPARQL query (just returns true or false)		
		$data = $this->sparqlSelect($sparql, ReturnType::RAW);	
		
		return $data;
	}

	// get preferred label for specified concept, 
	// TODO: optionally specify language, and allow for input as array of URIs
	public function getConceptPrefLabel($conceptURI)
	{
		// ensure valid input parameters
		if (!$conceptURI)		
			return "";
		
		// build a SPARQL query to retrieve the required data
		$sparql = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>			
			SELECT ?label WHERE { <" . $conceptURI . "> skos:prefLabel ?label }";
		
		// run the SPARQL query, return an array
		$data = $this->sparqlSelect($sparql, ReturnType::ROWS);		
		
		// $rows is an array of prefLabel - get first label in specified language
		$label = $conceptURI; // returns conceptURI if no suitable label is found
		if(is_array($data))
		{
			foreach ($data as $row)
			{					
				$label = $row["label"];		
				break; //jump out of loop after first record			
			}
		}
		return $label;
	}
	
	public function getScheme($schemeURI)
	{
		return $this->getResource($schemeURI);
	}
	public function getConcept($conceptURI)
	{
		return $this->getResource($conceptURI);
	}
	public function getResource($uri, $format="raw")
	{
		// ensure valid input parameters
		if (!$uri) return array();			

		$sparql = "DESCRIBE <" . $uri . ">";
		$data = $this->sparqlSelect($sparql, ReturnType::RAW);

		// possible output formats are rdf, ttl, n3, json, html		
		switch (strtolower(trim($format)))
		{
			case "rdf":
				return $this->store->toRDFXML($data);
				break;
			case "ttl":
				return $this->store->toTurtle($data);
				break;
			case "n3":
				$ser = ARC2::getTurtleSerializer();
				return $ser->getSerializedTriples(ARC2::getTriplesFromIndex($data)); 
				break;
			case "json":
				return $this->store->toRDFJSON($data);
				break;
			default: // raw
				return $data;
				break;
		}
	}	

	// Get the first suitable prefLabel property for a URI
	// optional extra parameter 'lang' to choose language
	function getPrefLabel($uri, $lang='')
	{
		$res = ARC2::getResource();
		$res->setStore($this->store);
		$res->setURI($uri);	
		$labels = $res->getProps(URI_SKOS_PREFLABEL);			
		
		$label = $uri; // returns the URI if no suitable label is found
		if(count($labels) > 0)
		{		
			if(empty($lang) || $labels[0]["lang"] === $lang)
				$label = $labels[0]["value"];
			
			if($labels[0]["lang"] !== 'en')
				$label .= " [" . $labels[0]["lang"] . "]";
		}
		return ($label);
	}

	// Get the dct:title property for a URI
	function getSchemeTitle($uri, $lang='')
	{	
		$res = ARC2::getResource();
		$res->setStore($this->store);
		$res->setURI($uri);	
		$titles = $res->getProps(URI_DCTERMS_TITLE);
			
		$title = $uri; // returns the URI if no title is found
		if(count($titles) > 0)
		{
			if(empty($lang) || $titles[0]["lang"] === $lang)
				$title = $titles[0]["value"]; 

			if($titles[0]["lang"] !== 'en')
				$title .= " [" . $titles[0]["lang"] . "]";		
		}
		return ($title);
	}
}	// end SeneschalData class



/**
 * from http://www.daveperrett.com/articles/2008/03/11/format-json-with-php/
 * utility function to pretty print a JSON string (as server PHP is < PHP 5.4)
 * Indents a flat JSON string to make it more human-readable.
 * @param string $json The original JSON string to process.
 * @return string Indented version of the original JSON string.
 */
function indent($json) {

    $result      = '';
    $pos         = 0;
    $strLen      = strlen($json);
    $indentStr   = '  ';
    $newLine     = "\n";
    $prevChar    = '';
    $outOfQuotes = true;

    for ($i=0; $i<=$strLen; $i++) {

        // Grab the next character in the string.
        $char = substr($json, $i, 1);

        // Are we inside a quoted string?
        if ($char == '"' && $prevChar != '\\') {
            $outOfQuotes = !$outOfQuotes;

        // If this character is the end of an element,
        // output a new line and indent the next line.
        } else if(($char == '}' || $char == ']') && $outOfQuotes) {
            $result .= $newLine;
            $pos --;
            for ($j=0; $j<$pos; $j++) {
                $result .= $indentStr;
            }
        }

        // Add the character to the result string.
        $result .= $char;

        // If the last character was the beginning of an element,
        // output a new line and indent the next line.
        if (($char == ',' || $char == '{' || $char == '[') && $outOfQuotes) {
            $result .= $newLine;
            if ($char == '{' || $char == '[') {
                $pos ++;
            }

            for ($j = 0; $j < $pos; $j++) {
                $result .= $indentStr;
            }
        }

        $prevChar = $char;
    }

    return $result;
}

?>