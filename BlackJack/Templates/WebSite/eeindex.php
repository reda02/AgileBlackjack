<?php 
    $title = "BlackJack - Home";
    $curr_player = "Joueur"; 
    include("rel/header.php");
?>
    <div class="row">
        <div class="mainContent col-md-4">

        </div>
        <div class="mainContent col-md-4">
            <form method="POST">
                <input type="text" class="form-control" placeholder="Nom du joueur"/><br />
                <a type="submit" class="btn btn-default" href="board.php">Commencer une partie</a>
            </form>
        </div>
        <div class="mainContent col-md-4">
          
        </div>
    </div>
<?php
    include("rel/footer.php");
?>