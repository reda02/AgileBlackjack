<?php
try
{
	//A changer pr la soutenance
	//$bdd = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'Black', 'BlackJack');
	$bdd = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'root', 'root');
}
catch (Exception $e)
{
		die('Erreur : ' . $e->getMessage());
}

$reponse = $bdd->query('SELECT * FROM score order by score DESC limit 10');


while ($donnees = $reponse->fetch())
{
	echo $donnees['nom'] . ' --> '.$donnees['score'].'<br />';
}

$reponse->closeCursor();
?>