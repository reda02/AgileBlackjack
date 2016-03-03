<?php 
    $title = "BlackJack - Jeu";
    $curr_player = "Nom du Joueur"; 
    include("rel/header.php");
?>
<form action="action.php" method="post">
 <p>Votre nom : <input type="text" name="nom" /></p>
 <p>Votre score : <input type="text" name="age" /></p>
 <p><input type="submit" value="OK"></p>
</form>

<?php 
    
    include("rel/footer.php");
?>