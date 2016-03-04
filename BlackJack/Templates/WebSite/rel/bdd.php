<?PHP
try
{
	//A changer pr la soutenance
	//$bdd = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'Black', 'BlackJack');
	$bdd = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'root', '');
}
catch (Exception $e)
{
		die('Erreur : ' . $e->getMessage());
}
?>