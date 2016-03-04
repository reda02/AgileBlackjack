<?php include 'rel/bdd.php';?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Quitter le jeu</title>
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    
  </head>
  <body>
	    <div class="row">
        <div class="col-md-10">
            <div class="bankContent row">
            <div class="container">
				<div class="col-md-12 alert alert-info">
					<div class="col-md-4"><strong>Vous avez quitter le jeu</strong> </div>
					<div class="col-md-4"> </div>
				  	<div class="col-md-4">
						<input class="btn btn-info pull-right" type="submit" value="Retour" onclick="window.location.href='index.php';" />
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
            </div>
        </div>
    </div>
    	
<?php
    include("rel/footer.php");
?>