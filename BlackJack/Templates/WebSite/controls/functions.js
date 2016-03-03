// DOM PRET
$(document).ready(function(){
	initializeDecks();	
	
});

var deck = new Array(260);
var bankCard1=0;

function initializeDecks(){
	var cards = ["AS","1","2","3","4","5","6","7","8","9","10","J","D","K"];
	var cardForms = ["cardHearts","cardDiamond","cardSpades","cardClubs"];
	
	var cpt = 0;
	for(var z=0; z < 6; z++)
	{
		for(var i = 0; i < 4; i++)
		{
			for(var j =0; j< 14; j++)
			{
				deck[cpt]=cardForms[i]+""+cards[j];
				cpt++;
			}
		}
	}	
	//console.log(deck);
}

function rendererBankCards(){
	
}
function rendererPlayerCards(){
	
}

function getCard(){	

	bankCard1 =	deck[Math.floor(Math.random()*deck.length)];
}

function shuffle() {
  var currentIndex = deck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
}