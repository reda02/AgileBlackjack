<?php
	include("rel/header.php");
	$reponse = $bdd->query('SELECT * FROM score order by score DESC limit 10');


	while ($donnees = $reponse->fetch())
	{
		echo $donnees['nom'] . ' --> '.$donnees['score'].'<br />';
	}

	$reponse->closeCursor();
?>