<?php 
    $title = "BlackJack - Jeu";
    $curr_player = "Nom du Joueur"; 
    include("rel/header.php");
?>
<script src="controls/functions.js"></script>
<script src="controls/score.js"></script>
    <div class="row">
        <div class="mainContent col-md-10">
            <div class="bankContent row">
                <div class="col-md-12">
                    <div id="bankCards">
                        <h2><i class="fa fa-university fa-3x"></i><br />Banque</h2>                        
                    </div>
                    <hr class="border-dotted"/>
                    <div id="playerCards">
                        <h2>
							<i class="fa fa-user fa-3x"></i>
							<br /><?= $curr_player ?>
						</h2>
						
                    </div>
                    <div class="row boardControls">
                        <div class="col-md-3">
                            <button id="btn-abandon" class="btn btn-warning disabled" onclick="resetGame();" >ABANDON</button>
                            <button  id="btn-add-carte" class="btn btn-primary" onclick="addCard();">CARTE SUPPLEMENTAIRE</button>
                        </div>
                        <div class="col-md-6">
                           <?php include("mise.php"); ?>
                        </div>
						<div class="col-md-3"><a class="btn btn-danger" onclick="addCartBank();">Fin du tour</a></div>
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
                            <h3>Etat de la main : <label id="resultMainJoueur">NC</label></h3>
                            <!--<h3>Etat de la main <i class="fa fa-hand-paper-o fa-2x"></i> - Valeur : 10</h3>
                            <h3>Etat de la main <i class="fa fa-thumbs-down fa-2x"></i> - Valeur : 22</h3>-->
                       </div>
                       <div class="col-md-4">
                           <h2> La Banque </h2>
                           <h3><i class="fa fa-money fa-2x"></i> ∞ </h3>
                            <h3>Etat de sa main : <label id="resultMainBanque">NC</label></h3>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo at lorem sed pharetra. Curabitur nec odio facilisis, scelerisque velit eu, pharetra lectus. Aenean a venenatis felis, eu elementum nisl. Sed efficitur blandit ultrices. Etiam semper efficitur faucibus. Vestibulum fermentum ex purus, non efficitur metus cursus nec. Sed rutrum elit nisi, in aliquam tellus dictum non. Phasellus vel velit fermentum, mattis diam congue, posuere mi.

Nam ac dapibus ex, a pretium sem. Cras lacinia, arcu laoreet vehicula laoreet, elit ex maximus magna, sit amet dapibus mi urna ac nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer auctor, lorem eget tempor faucibus, nulla ipsum lobortis erat, eu aliquet ante augue quis ipsum. Suspendisse id finibus dui. Donec consequat quis lectus vel tempor. Quisque dignissim justo mi, ac rhoncus nisl interdum a. Proin nec facilisis odio. Proin scelerisque pharetra erat, eleifend cursus metus rhoncus non. Sed fringilla lacinia purus eu volutpat. Maecenas non lacus tristique, sodales ipsum eu, tempus tellus. Maecenas pellentesque interdum augue, eu porta turpis blandit vel.

Duis dignissim et erat ac rutrum. Sed id mollis nibh, convallis consequat leo. Maecenas dui felis, dictum faucibus erat ac, porta convallis libero. Donec tortor nisl, porta in ultricies eu, consequat non mauris. Donec aliquam erat eget leo vulputate scelerisque. Suspendisse tempor, erat vitae consectetur sodales, nunc tellus sollicitudin sapien, sit amet maximus ante lorem ut lacus. Proin aliquam, dolor in fringilla malesuada, mi erat congue massa, ut ornare ipsum ante ac ipsum. In vitae nibh vehicula, finibus urna vitae, gravida turpis. Phasellus vitae eleifend augue. Phasellus faucibus laoreet est id scelerisque. Praesent euismod eros enim, feugiat porttitor eros mollis at. In non justo et dolor varius pharetra eget id nulla. Nam convallis in ante a mattis. Integer interdum vulputate sem, a tempor augue vulputate ut. Duis eleifend, tortor at luctus posuere, tortor nisl finibus lectus, in ornare felis elit in justo. Donec hendrerit finibus felis, eget fringilla felis maximus vel.
                </p>
            </div>
        </div>
    </div>
      
<?php
    include("rel/footer.php");
?>