// DOM PRET
$(document).ready(function(){
 initializeDecks();
 desactivateButtons("btn-abandon","btn-add-carte");
 $('#btn-add-carte').click(addCard());
 
 if(document.getElementById("mycheck").checked)
	 showNotification("Veuillez sélectionner une mise minimum 20 maximum 300","help");
});

var cardsJoueur =[];
var cardBanque = [];
var cards;
var bankCard1=0;
var totale=0 ;
var totaleBanque=0;
var deck = new Array(260);
var bankCard1=0;


function parseCard(__card ){
 
  var temp =__card.substring(__card.length-1,__card.length);
  
  if(temp == 0)
  {
   temp = 10;
   
  }else if( ('Q'==temp )|| ('K'==temp) || ('J' ==temp) ){
  temp= 10;
  
 }else if(totale < 11 && ('A' == temp) ){
  
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

// Calcul main du banquier
function CalculeTotalCardBankcards(){
	
	totaleBanque=0;
	var card11 = false;
	  
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
     

    /*if( totaleBanque > 21 ){
		    //arreterJeux("tolat>21", "bank");
        arreterJeux("bank");
     
    }*/
  // MAJ du résultat Main Joueur
  $("#resultMainBanque").text(totale);
 
}
function arreterJeux(who){
	var message = " votre jeux est";
  // 0 : lose ; 1 : dual ; 2 : win 
  var etat = 0;
  
  switch(who){
    case "bank":
    if(totaleBanque > 21){
      message+=" inférieur à 21 , et la banque supérieur à 21 , WIN !! ";
      etat = 2;
    }else if (totaleBanque == totale){
      message+=" égale à celui de la banque , DUAL !! ";
      etat = 1;
    }else if (totaleBanque > totale){
       message+=" "+totale+" , et la banque est "+totaleBanque+" , PERDU !! ";
      etat = 0;
    }else if (totaleBanque < totale){
      message+=" "+totale+" , et la banque est "+totaleBanque+" , WIN !! ";
      etat = 1;
    }    
    break;
    case "player":
    if(totale > 21){
      message+=" supérieur à 21 , PERDU !! ";
      etat = 0;
    }else if (totaleBanque == totale && cardBanque.length > 1){
      message+=" égale à celui de la banque , DUAL !! ";
      etat = 1;
    }else if (totaleBanque > totale && cardBanque.length > 1){
       message+=" "+totale+" , et la banque est "+totaleBanque+" , PERDU !! ";
      etat = 0;
    }else if (totaleBanque < totale && cardBanque.length > 1){
      message+=" "+totale+" , et la banque est "+totaleBanque+" , WIN !! ";
      etat = 1;
    }
      break;
    default:
      break;
  }
  if(message.length < 20) console.log(totaleBanque + "  " + totale);
  switch (etat){
    case 0 :
    showNotification(message,"lose");
	resetGame(0);
    break;
    case 1 :
    showNotification(message,"win");
	resetGame(1);
    break;
    case 2 :
    showNotification(message,"dual");
	resetGame(2);
    break;
    default:
      break;
  }

/*
	if( "tolat>21" == message ){
    if(who == "bank"){
      person = "La Banque ";
    }else{
      person = "Votre jeu ";
    }
		showNotification(person +"est supérieur à 21, Perdu !","lose");
	}
  if( "tolat=21" == message ){
    if(who == "bank"){
      person = "La Banque ";
    }else{
      person = "Votre jeu ";
    }
    showNotification(person +"est un BlackJack ! GAGNE !","win");
  }*/
	
}
// Calcul main d'un joueur
function CalculeTotalCard(){
 totale=0;

 var card11 = false;

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
 }
  if( totale > 21 ){
    //arreterJeux("tolat>21","player");
    arreterJeux("player");
  }
  if(totale == 21){
    arreterJeux("player");
    //arreterJeux("tolat=21","player");
  }
  // MAJ du résultat Main Joueur
  $("#resultMainJoueur").text(totale);
 
}
/*function arreterJeux(message){
	
	if( "tolat>21" == message ){
		showNotification("Votre jeu est supérieur à 21, Vous avez perdu !","lose");
	}

}*/

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

 iDiv.className = 'card';
 var img = "assets/img/";
 img += bankCard1 + ".png";
 iDiv.style.backgroundImage = " url("+img+")";
 player.appendChild(iDiv);
 
 if( id == "playerCards" ){
  CalculeTotalCard() ;
  setScoreDiv("score-current-player",totale);

 }
  

 if( id == "bankCards" ){
  CalculeTotalCardBankcards() ;
  setScoreDiv("score-current-bank",totaleBanque)
 }

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
  //console.log($('#btn-add-carte').hasClass("disabled"))
  //console.log(CalculeTotalCard());
  if(($('#btn-add-carte').hasClass("disabled"))) return;
  else
  {
   getCard("playerCards");      
	
  }
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

// NON TERMINE !
function resetGame(type){
	 var result = 0 ;
	// 0 : lose ; 1 : dual ; 2 : win ; 3 : abon
	switch (type){
		case 0 :
		result = 0;
		
		break;
		case 1 :
			result = bet;
		
		break;
		case 2 :
			result = bet * 2 ;
		
		break;
		case 3 :
			result = bet / 2;
		
			break;
		default:
		  break;
	}

 walletPlayer = walletPlayer + result;
 $("#wallet").text(walletPlayer.toString());
 resetBoard();
}

function resetBoard(){
	bet = 0;
	desactivateButtons("btn-abandon","btn-add-carte","btn-hold");
	activateButtons("btn_mise");  
	
	$("#current-bet").text(0);
	$("#score-current-bank").text(0);
	$("#score-current-player").text(0);
	unsetScoreDiv("score-current-bank",0);
	unsetScoreDiv("score-current-player",0);
	$('#inputBeginMise').slider('enable');
	$('#bankCards').find('.card').remove();
	$('#playerCards').find('.card').remove();
	
	cardsJoueur =[];
	cardBanque = [];
	cards;
	bankCard1=0;
	//totale=0 ;
	totaleBanque=0;
	bankCard1=0;
	
}
// Fonction d'affichage notification
function showNotification(_message, _type){
  $.notify.addStyle('happyblue', {
    html: "<div><span data-notify-text/></div>",
    classes: {
      base: {
        "white-space": "nowrap",
        "background-color": "lightblue",
        "padding": "5px"
      },
      superblue: {
        "color": "white",
        "background-color": "blue"
      }
    }
  });
   $.notify.addStyle('LoseRed', {
    html: "<div><span data-notify-text/></div>",
    classes: {
      base: {
        "white-space": "nowrap",
        "background-color": "#FA5858",
        "padding": "5px"
      },
      superRed: {
        "color": "white",
        "background-color": "#FA5858"
      }
    }
  });
   switch(_type){
    case "lose":
    $.notify(_message, {
      style: 'LoseRed'
    });
    break;
   case "dual":
   $.notify(_message, {
      style: 'happyblue'
    });
      break;
   case "win":
   $.notify(_message, {
      style: 'happyblue'
    });
      break;
	  case "help":
   $.notify(_message, {
      style: 'happyblue'
    });
      break;
   }
  
}
function setScoreDiv(idParag,score){
  if(($('#'+idParag).hasClass("hidden-div"))) {
      $('#'+idParag).removeClass("hidden-div");
  }
  $('#'+idParag).text(score);
}
function unsetScoreDiv(idParag,score){
  if(!($('#'+idParag).hasClass("hidden-div"))) {
      $('#'+idParag).addClass("hidden-div");
  }
  $('#'+idParag).text(score);
}
function hold(){
	debugger;
  do{
    getCard("bankCards");
    //sleepFor(300);

      
  }while(totaleBanque<17)
  desactivateButtons("btn_mise","btn-add-carte");
  arreterJeux("bank");
  
}

function sleepFor( duree ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + duree){ /* do nothing */ } 
}
/*function afficheResultat(){
  if(totaleBanque > 21){
      $('#result-bet').notify('player win !! ','success')
  }else{
    if(totale <= 21){
      if(totaleBanque > totale)
        $('#result-bet').notify('bank win !! ','error');
      else if (totaleBanque < totale && totaleBanque.length>1)
        $('#result-bet').notify('player win !! ','success');
      else
        $('#result-bet').notify('dual !! ','warn');
    }else{
      $('#result-bet').notify('bank win !! ','error');
    }

  }
}*/

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
	totale=0 ;
	totaleBanque=0;
	bet = parseInt($('#inputBeginMise').val());
	if ( (walletPlayer - bet) >= 0){
		walletPlayer = walletPlayer - bet;
		$("#wallet").text(walletPlayer.toString());
		distribuerCartes();
		activateButtons("btn-abandon","btn-add-carte","btn-hold");
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
	if(document.getElementById("mycheck").checked)
	{
		  var msg = "Votre score est de " + totale ;
	   showNotification(msg,"help");
	   var msg2 = "vous pouvez sélectionner une nouvelle carte ou vous arrêter en appuyant sur RESTER /!\  ";
	   showNotification(msg2,"help");
	   var msg3 = "la banque elle s'arrête à 17 minimum /!\ Vous pouvez abandonner: vous perdrez à ce moment la moitié de votre mise";
	   showNotification(msg3,"help");	
	}
}


