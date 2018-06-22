function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function picFunction() {
	document.getElementsByTagName('img')[0].style.display = "none";
}

function update(value){
    document.getElementById("screen").value += value;
}

function result(){
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

function reset(){
    document.getElementById("screen").value = '';
}

function date_time(){
	document.getElementById("date_time").innerHTML = Date();
}

const API_KEY = "apikey=tXSjreliE1V0n9OS7589OML48MU4m6EN"

const URL = "https://api.giphy.com/v1"

const TRENDING = "/gifs/trending?"

function getGifs(){
	
	var request = new XMLHttpRequest();
	
	var requestUrl = URL + TRENDING + API_KEY + "&limit=10"
	
	request.open('GET', requestUrl);
	request.responseType = 'json';
	request.send();
	
	request.onload = function() {
		var response = request.response;
		for(var i = 0; i < 10; i++){
			document.getElementById('gif' + (i + 1)).src = response.data[i].images.fixed_width.url;
		}
	}
	
}

		
