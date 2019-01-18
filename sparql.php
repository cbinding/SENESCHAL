<?php
	ini_set('memory_limit', '150M');
	#include_once(__DIR__."/vendor/semsol/arc2/ARC2.php");
	include_once(__DIR__."/vendor/autoload.php");  // this is because it was set up with composer	
	$epconfig = "";
	
	/* MySQL and endpoint configuration */	
		$epconfig = array(
		  /* db */
		  'db_host' => 'xxx.xxx.xxx.xxx', /* optional, default is localhost */
		  'db_name' => 'xxx',
		  'db_user' => 'xxx',
		  'db_pwd' => 'xxx',
		  /* store name */
		  'store_name' => 'xxx',
		  /* endpoint */
		  'endpoint_features' => array('select', 'construct', 'ask', 'describe', 
		'load', 'insert', 'delete', 'dump' /* dump is a special command for streaming SPOG export */
		  ),
		  'endpoint_timeout' => 60, /* not implemented in ARC2 preview */
		  'endpoint_read_key' => '', /* optional */
		  'endpoint_write_key' => 'xxx', /* optional, but without one, everyone can write! */
		  'endpoint_max_limit' => 500, /* optional */
		);
	


/* instantiation */
$ep = ARC2::getStoreEndpoint($epconfig);

if (!$ep->isSetUp()) {
  $ep->setUp(); /* create MySQL tables */
}

/* request handling */
$ep->go();
?>
