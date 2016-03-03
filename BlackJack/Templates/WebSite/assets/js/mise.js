var walletPlayer;
var walletBank;

$(document).ready(function(){
	walletPlayer = parseInt($("#wallet").text());
	walletBank = 0;
})

function mise() {
	var mise = parseInt($('#inputBeginMise').val());
	walletPlayer = walletPlayer - mise;
	$("#wallet").text(walletPlayer.toString()); 
	debugger;
}