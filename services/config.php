<?php
	global $config;
	if($_SERVER["SERVER_NAME"] === 'localhost') {
			$config['db'] = array(
			'db_host' => 'localhost',
			'db_name' => 'seneschal',
			'db_user' => 'xyz',
			'db_pwd'  => '123',
			'store_name' => 'seneschaldata',
			/* stop after 100 errors */
			'max_errors' => 100,
		);
		$config['baseURI'] = "http://localhost/heritagedata/";
	}
	else {
		
		$config['db'] = array(
			'db_host' => 'xxx.xxx.xxx.xxx',
			'db_name' => 'seneschal',
			'db_user' => 'xyz',
			'db_pwd'  => '123',
			'store_name' => 'seneschaldata',
			/* stop after 100 errors */
			'max_errors' => 100,
		);
		$config['baseURI'] = "http://purl.org/heritagedata/";
	}
?>
