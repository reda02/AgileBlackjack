

function onGameFinished() {

	var person = prompt("Please enter your name", "Eddy Malou");
	if(person !== null){
		var data = {};
		data["name"] = person;
		data["score"] = walletPlayer;
		var query = "writeScore.php?" + constructParamsList(data);
		
		getRequest(query);

		var res = confirm("Voulez-vous refaire une partie ?");

		if(res) {
			window.location.reload();
		}
		else {
			window.location.href = 'exit.php';

		}
	}	
	
}