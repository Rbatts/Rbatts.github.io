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


document.addEventListener('DOMContentLoaded', function () {
	q = "trending";
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=tXSjreliE1V0n9OS7589OML48MU4m6EN&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});
