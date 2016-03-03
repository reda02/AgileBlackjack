// DOM PRET
$(document).ready(function(){
	initializeDecks();
	desactivateButtons("btn-abandon","btn-add-carte");
	
	//getCard("playerCards");
	//getCard("bankCards");
	//getCard("playerCards");
});

var deck = new Array(260);
var bankCard1=0;

function initializeDecks(){
	var cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
	var cardForms = ["cardHearts","cardDiamonds","cardSpades","cardClubs"];
	
	var cpt = 0;
	for(var z=0; z < 6; z++)
	{
		for(var i = 0; i < 4; i++)
		{
			for(var j =0; j< 13; j++)
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

function getCard( id ){	
	var idx = Math.floor(Math.random()*deck.length);
	bankCard1 =	deck[idx];
	
	if (idx > -1) {
    deck.splice(idx, 1);
	}
	var player = document.getElementById(id);
	var iDiv = document.createElement('div');
	iDiv.className = 'card';
	var img = "assets/img/";
	img += bankCard1 + ".png";
	iDiv.style.backgroundImage = " url("+img+")";
        //background-image: url("../img/cardSpades6.png");
	player.appendChild(iDiv);
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

function desactivateButtons(){
	
	if(arguments.length > 0){
		for (i = 0; i < arguments.length; i++) {
			$(('#'+arguments[i])).addClass('disabled');
		}
	}
}

function activateButtons(){
	if(arguments.length > 0){
		for (i = 0; i < arguments.length; i++) {
			$(('#'+arguments[i])).removeClass('disabled');
		}
	}
}

function setBet(){
	$("#current-bet").text(bet.toString());
}