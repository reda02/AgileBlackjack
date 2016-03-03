<?php 
    $title = "BlackJack - Jeu";
    $curr_player = "Nom du Joueur"; 
    include("rel/header.php");
	if(isset($_POST))
	{
		if(isset($_POST['submit']))
		{
			$req = $bdd->prepare('insert into score (nom, score) VALUES (:nom, :score)');
			$req->execute(array(
				'nom' => $_POST['nom'],
				'score' => $_POST['score']
				));
			header('Location: index.php');
		}		
	}


?>
<form action="user_form.php" method="post">
 <p>Votre nom : <input type="text" name="nom" /></p>
 <p>Votre score : <input type="text" name="score" /></p>
 <p><input type="submit" name="submit" value="OK"></p>
</form>

<?php 
    
    include("rel/footer.php");
?>