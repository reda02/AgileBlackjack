<?php
include_once('config.php');
	try{
        	$pdo_blackjack =
                new PDO("mysql:host=".IP_HOST.
                        ";dbname=".DB_NAME.
                        "", USER_NAME,
                        USER_PWD);
        	$pdo_intranet->exec("set names utf8");
        	$pdo_intranet->setAttribute(PDO::ATTR_ERRMODE, 
					PDO::ERRMODE_EXCEPTION); 
	}

	catch (Exception $e2){
		die ($e2->getMessage());
	} 
?>
