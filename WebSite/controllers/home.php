<?php
include_once('lib/Smarty.class.php');

$smarty = new Smarty();
$match = $router->match();
	switch ($match['name']) {
    
    		case "home":
        	$smarty->display("view/index.tpl");
		break;
		default:
			echo " default";
		break;
	}
?>
