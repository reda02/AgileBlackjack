var walletPlayer;
var walletBank;
var bet;

$(document).ready(function(){
	walletPlayer = parseInt($("#wallet").text());
	walletBank = 0;
	$('#btn_mise').click(mise);
})

function mise() {
	if(($('#btn_mise').hasClass("disabled"))) return;
	
	bet = parseInt($('#inputBeginMise').val());
	if ( (walletPlayer - bet) >= 0){
		walletPlayer = walletPlayer - bet;
		$("#wallet").text(walletPlayer.toString());
		distribuerCartes();
		activateButtons("btn-abandon","btn-add-carte");
		desactivateButtons("btn_mise");
		$('#inputBeginMise').slider('disable');
		setBet();
	}else{
		alert('il n\'a plus d\'argents');
		
	}	
}
function distribuerCartes(){
	getCard("playerCards");	
	getCard("bankCards");
	getCard("playerCards");
	

}


