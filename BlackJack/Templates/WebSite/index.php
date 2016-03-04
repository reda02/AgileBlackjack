<?php 
    $title = "BlackJack - Jeu";
    $curr_player = "Joueur"; 
    include("rel/header.php");
?>
<script src="controls/functions.js"></script>
<script src="controls/score.js"></script>
    <div class="row">
	 
        <div class="mainContent col-md-10">
		<div class="checkbox" >
  <label><input id="mycheck" type="checkbox" value="check"><h4>Mode Débutant</h4></label>
</div>
            <div class="bankContent row">
                <div class="col-md-12">
                    <div id="bankCards">

                        <h2><i class="fa fa-university fa-3x"></i><br />Banque</h2> 
                        <div>
                            <p id="score-current-bank" class="hidden-div" >0</p>
                        </div>                       
                    </div>
                    <hr class="border-dotted"/>
                    <div id="playerCards">
                        <div>
                            <p id="score-current-player" class="hidden-div" >0</p>
                        </div>
                        <h2>
							<i class="fa fa-user fa-3x"></i>
							<br /><?= $curr_player ?>
						</h2>
						
                    </div>
                    <div class="row boardControls">
                        <div class="col-md-3">

                            <button id="btn-hold" class="btn btn-primary disabled" onclick="hold();"  >FIN DU TOUR</button>
                            <button id="btn-abandon" class="btn btn-warning disabled" onclick="resetGame(3);" >ABANDON</button>
                            <button  id="btn-add-carte" class="btn btn-info" onclick="addCard();">CARTE SUPPLEMENTAIRE</button>

                        </div>
                        <div class="col-md-6">
                           <?php include("mise.php"); ?>
                        </div>
						<div class="col-md-3"><a class="btn btn-danger " onclick="jeux();">Tour suivant</a></div>
                        <div class="col-md-3"><a class="btn btn-danger " onclick="onGameFinished();">QUITTER LA TABLE</a></div>
                    </div>
                    <div class="row gameState">
                       <div class="col-md-4">
                            <h2> Mon argent disponible </h2>
                            <h3><i class="fa fa-money fa-2x"></i> $<label id="wallet">1000</label></h3>
                       </div>
                       <div class="col-md-4 myGame">
                            <h2> Mon jeu </h2>
                            <h3><i class="fa fa-money fa-2x"></i> $<label id="current-bet">0</label> </h3>
                            <h3>Etat de la main : <label id="resultMainJoueur">0</label></h3>
                            <!--<h3>Etat de la main <i class="fa fa-hand-paper-o fa-2x"></i> - Valeur : 10</h3>
                            <h3>Etat de la main <i class="fa fa-thumbs-down fa-2x"></i> - Valeur : 22</h3>-->
                       </div>
                       <div class="col-md-4">
                           <h2> La Banque </h2>
                           <h3><i class="fa fa-money fa-2x"></i> ∞ </h3>
                            <h3>Etat de sa main : <label id="resultMainBanque">0</label></h3>
                            <!--<h3>Etat de sa main <i class="fa fa-hand-paper-o fa-2x"></i> - Valeur : 10</h3>
                            <h3>Etat de sa main <i class="fa fa-thumbs-down fa-2x"></i> - Valeur : 22</h3>-->
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="helpContent col-md-2">	
            <div class="centered">
				TOP SCORE : <br><br>
				<?php
					include 'highScore.php';
				?>	
				 <br><br> <br><br>
                <i class="fa fa-question-circle fa-3x orange"></i>
                <hr class="border-dotted"/>     
				<h4> Règles du jeu </h4> 				
                <p class="help-descriptor">
				<a href="https://fr.wikipedia.org/wiki/Blackjack_%28jeu%29"> Suivre ce lien </a></p>
            </div>
        </div>
    </div>
      
<?php
    include("rel/footer.php");
?>