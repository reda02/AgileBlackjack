var walletPlayer;
var walletBank;
var bet;

$(document).ready(function(){
	walletPlayer = parseInt($("#wallet").text());
	walletBank = 0;
})

function mise() {
	bet = parseInt($('#inputBeginMise').val());
	if ( (walletPlayer - bet) >= 0){
		walletPlayer = walletPlayer - bet;
		$("#wallet").text(walletPlayer.toString());
		distribuerCartes();
		activateButtons("btn-abandon","btn-add-carte");
		desactivateButtons("btn_mise");
		setBet();
	}else{
		alert('il n\'a plus d\'argents');
		// il n\'a plus d'argents
	}
	
	//debugger;
}
function distribuerCartes(){
	getCard("playerCards");
	getCard("playerCards");
	

}


