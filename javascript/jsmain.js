var count = 0;
function check(){
	var div = document.getElementById("navbar");
	if(div.style.display === "none"){
		div.style.display = "block";
	}
	else{
		div.style.display = "none";	
	}
}