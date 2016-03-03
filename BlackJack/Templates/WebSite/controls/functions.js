// DOM PRET
$(document).ready(function(){
	initializeDecks();
	
});

var deck = new Array(260);

function initializeDecks(){
	var cards = ["AS","1","2","3","4","5","6","7","8","9","10","J","D","R"];
	var cardForms = ["PIQUE","CARREAU","COEUR","TREFLE"];
	
	var cpt = 0;
	for(var z=0; z < 6; z++)
	{
		for(var i = 0; i < 4; i++)
		{
			for(var j =0; j< 14; j++)
			{
				deck[cpt] = cardForms[i]+"_"+cards[j];
				cpt++;
			}
		}
	}	
	console.log(deck);
}

function rendererBankCards(){
	
}
function rendererPlayerCards(){
	
}