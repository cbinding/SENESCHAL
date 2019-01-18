<?php
	global $config;	
	if($_SERVER["SERVER_NAME"] === 'localhost') {
		$config = array(
			'db_host' => 'localhost',
			'db_name' => 'xxx',
			'db_user' => 'xxx',
			'db_pwd'  => 'xxx',
			'store_name' => 'xxx',
			/* stop after 100 errors */
			'max_errors' => 100,
			'cache_enabled' => false,
			
			'baseURI' => "http://heritagedata.localhost/"
		);		
	}
	else {		
		$config = array(
			'db_host' => 'xxx.xxx.xxx.xxx',
			'db_name' => 'xxx',
			'db_user' => 'xxx',
			'db_pwd'  => 'xxx',
			'store_name' => 'xxx',
			/* stop after 100 errors */
			'max_errors' => 100,
			'cache_enabled' => false,
			
			'baseURI' => "http://purl.org/heritagedata/"
		);		
	}
?>
