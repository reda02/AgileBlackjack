<?PHP
try
{
	//A changer pr la soutenance
	//$bdd = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'Black', 'BlackJack');
	$bdd = new PDO('mysql:host=localhost;dbname=bj_db;charset=utf8', 'root', 'root');
}
catch (Exception $e)
{
		die('Erreur : ' . $e->getMessage());
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?= $title ?></title>
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="assets/css/blackjack.css" rel="stylesheet" type="text/css">
    <link href="assets/css/bootstrap-slider.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/bootstrap-slider.min.js"></script>
	
  </head>
  <body>
      