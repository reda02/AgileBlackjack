

function onGameFinished() {

	var person = prompt("Please enter your name", "Eddy Malou");
	var data = {};
	data["name"] = person;
	data["score"] = walletPlayer;
	var query = "writeScore.php?" + constructParamsList(data);
	
	getRequest(query);
}