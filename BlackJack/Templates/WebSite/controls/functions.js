
// DOM PRET
$(document).ready(function(){
	initializeDecks();
	desactivateButtons("btn-abandon","btn-add-carte");
	$('#btn-add-carte').click(addCard());
});

var cardsJoueur =[];
var cardBanque = [];
var cards; 


var deck = new Array(260);
var bankCard1=0;
var totale=0 ;

var deck = new Array(260);
var bankCard1=0;

// Une fonction qui à partir d'un tableau de cartes (La main du joueur), vous donne le résultat de l'addition
// Params : Liste de cartes
// Sortie : Résultat de la main
function parseCard(__card ){
	
		var temp =__card.substring(__card.length-1,__card.length);
		
		if(temp == 0)
		{
			temp = 10;
			
		}
		
	if( ('Q'==temp )|| ('K'==temp) || ('J' ==temp) ){
		temp= 10;
		
	}
    if(totale < 11 && ('A' == temp) ){
		
		temp= 11;
		
	}
	
	 return parseInt(temp);
}

function initializeDecks(){
	cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
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

function CalculeTotalCard(){
totale=0;
	for(var z=0; z < cardsJoueur.length; z++)
	{
				
				totale= totale + parseCard(cardsJoueur[z]) ;	
			
			      console.log("totale "+totale);

	}	
	
	
}




function getCard(){	 






	var idx = Math.floor(Math.random()*deck.length);
	bankCard1 =	deck[idx]; 

	
	cardsJoueur.push(bankCard1) ;

	if (idx > -1) {
    deck.splice(idx, 1);
	}
	var player = document.getElementById("playerCards");
	var iDiv = document.createElement('div');
     console.log("player"+ player)
	  console.log("iDiv"+ iDiv)
	iDiv.className = 'card';
	var img = "assets/img/";
	img += bankCard1 + ".png";
	iDiv.style.backgroundImage = " url("+img+")";
 
	player.appendChild(iDiv);
	CalculeTotalCard() ;
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
function addCard(){
		console.log($('#btn-add-carte').hasClass("disabled"))
		if(($('#btn-add-carte').hasClass("disabled"))) return;
		else
			getCard("playerCards")
}