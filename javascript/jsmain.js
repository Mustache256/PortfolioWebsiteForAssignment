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
function MouseRollover1(HomeImage) {
  HomeImage.src = "images/homebuttonmouseover.png";
}
function MouseOut1(HomeImage){
  HomeImage.src = "images/homebutton.png";
}
function MouseRollover2(ProjectsImage) {
  ProjectsImage.src = "images/projectsbuttonmouseover.png";
}
function MouseOut2(ProjectsImage){
  ProjectsImage.src = "images/projectsbutton.png";
}
function MouseRollover3(InterestsImage) {
  InterestsImage.src = "images/interestsbuttonmouseover.png";
}
function MouseOut3(InterestsImage){
  InterestsImage.src = "images/interestsbutton.png";
}
function MouseRollover4(ContactImage) {
  ContactImage.src = "images/contactbuttonmouseover.png";
}
function MouseOut4(ContactImage){
  ContactImage.src = "images/contactbutton.png";
}