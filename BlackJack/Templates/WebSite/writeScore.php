<?php
	include('rel/bdd.php');
	
	if(isset($_GET['name']) && isset($_GET['score'])) {

		$playerName = $_GET['name'];
		$score 		= $_GET['score'];

		$req = $bdd->prepare('insert into score (nom, score) VALUES (:nom, :score)');

		$req->execute(array(
			'nom'   => $playerName,
			'score' => $score
		));
	}
?>