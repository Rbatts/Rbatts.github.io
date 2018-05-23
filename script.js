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
	document.getElementById("date_time").innerHTML = Date();5
}
	
const API_KEY = "apiKey=tXSjreliE1V0n9OS7589OML48MU4m6EN"

const URL = "https://api.giphy.com/v1"

const RANDOM_END_POINT = "/gifs/random?"

function getGif() {
  // we create a new instance of an HTTP request
  var request = new XMLHttpRequest();
  //we get the text that the user has typed in
  searchTerm = document.getElementById('input-box').value;
  // we set up the url endpoint we want to reach
  var searchQuery = "&tag=" + searchTerm;
  var requestUrl = URL + RANDOM_END_POINT + API_KEY + searchQuery
  
  // we make the request
  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.send();

  //we do something with the successful response
  request.onload = function() {
    var response = request.response;
    var imageUrl  = response.data.image_url;
    document.getElementById('gif').src = imageUrl
  }
}






