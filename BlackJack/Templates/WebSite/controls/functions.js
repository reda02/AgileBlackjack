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
var totaleBanque=0;

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

function CalculeTotalCardBankcards(){
	
	totaleBanque=0;
    var card11 = false;

 for(var z=0; z < cardBanque.length; z++)
 {
  
  if(11 == parseCard(cardBanque[z]) && (11 == parseCard(cardBanque[z+1]))){
   arreterleJeux(total);
  }
 } 
  
 for(var z=0; z < cardBanque.length; z++)
 {
  if(11 == parseCard(cardBanque[z]) ){
   card11 =true;
  }  
 }
 for(var z=0; z < cardBanque.length; z++)
 {
 
    totaleBanque= totaleBanque + parseCard(cardBanque[z]) ; 
        
 
 } 
 if(totaleBanque > 21 && card11 == true){
  totaleBanque=totaleBanque - 10;
  console.log("info "+"-10");
  
 }
     console.log("etat "+card11);
     console.log("totaleBanque "+totaleBanque);

    if( totaleBanque >= 21 ){
		arreterJeux("tolat>21");
     
    }
 
 
}
function arreterJeux(message){
	
	if( "tolat>21" == message ){
		alert("la partie est superieur a 21")
	}
	
}
	







function CalculeTotalCard(){
totale=0;

 var card11 = false;
 


 for(var z=0; z < cardsJoueur.length; z++)
 {
  
  if(11 == parseCard(cardsJoueur[z]) && (11 == parseCard(cardsJoueur[z+1]))){
   arreterleJeux(total);
  }
 } 
  
 for(var z=0; z < cardsJoueur.length; z++)
 {
  if(11 == parseCard(cardsJoueur[z]) ){
   card11 =true;
  }  
 }
 for(var z=0; z < cardsJoueur.length; z++)
 {
 
    totale= totale + parseCard(cardsJoueur[z]) ; 
        
 
 } 
 if(totale > 21 && card11 == true){
  totale=totale - 10;
 // console.log("info "+"-10");
  
 }
  //   console.log("etat "+card11);
  //   console.log("totale "+totale);

    if( totale >= 21 ){
		arreterJeux("tolat>21");
     
    }
 
 
}
function arreterJeux(message){
	
	if( "tolat>21" == message ){
		alert("la partie est superieur a 21")
	}

}

function getCard( id ){ 
 var idx = Math.floor(Math.random()*deck.length);
 bankCard1 = deck[idx];
 if( id == "playerCards" )
 cardsJoueur.push(bankCard1) ;


  if( id == "bankCards" )
 cardBanque.push(bankCard1) ;


 if (idx > -1) {
    deck.splice(idx, 1);
 }
 var player = document.getElementById(id);
 var iDiv = document.createElement('div');
     console.log("player"+ player)
   console.log("iDiv"+ iDiv)
 iDiv.className = 'card';
 var img = "assets/img/";
 img += bankCard1 + ".png";
 iDiv.style.backgroundImage = " url("+img+")";
        //background-image: url("../img/cardSpades6.png");
 player.appendChild(iDiv);
 
 if( id == "playerCards" )
  CalculeTotalCard() ;

 if( id == "bankCards" )
  CalculeTotalCardBankcards() ;

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

function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch(e) {
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    
    if (!req) 
    	return false;

    if (typeof success != 'function') 
    	success = function () {};
    if (typeof error!= 'function') 
    	error = function () {};
    
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    
    req.open("GET", url, true);
    req.send(null);
    
    return req;
}

function constructParamsList(data)
{
   var ret = [];
   for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
   return ret.join("&");
}