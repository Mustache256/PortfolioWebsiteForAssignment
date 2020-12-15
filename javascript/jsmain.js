var count = 0;

//Checks to see if navigation bar is visible on the screen
function check(){
	var div = document.getElementById("navbar");
	if(div.style.display == "none"){
		div.style.display = "block";
	}
	else{
		div.style.display = "none";	
	}
}

//Image rollovers for the navigation bar
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

//validation checks for the contact form, checking to see if all fields have been filed in with the correct information
function MM_validateForm() {
  if (document.getElementById){
    var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
    for (i=0; i<(args.length-2); i+=3) { 
			test=args[i+2]; val=document.getElementById(args[i]);
      if (val) { nm=val.name; if ((val=val.value)!="") {
        if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
          if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n'; 
					}
						else if (test!='R') { num = parseFloat(val);
						if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
						if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
            min=test.substring(8,p); max=test.substring(p+1);
            if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
					} 
				} 
			} 
			else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
    } 
		if (errors) alert('The following error(s) occurred:\n'+errors);
    document.MM_returnValue = (errors == '');
	}
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}  

// JavaScript for the Canvas
var playerImage;

function load()
{
	// Allocate a new image and assign it to previous variable
	playerImage = new Image();
	// Set the src.
	playerImage.src = "redsquare.png";
}
function main()
{
	// Retrieving canvas
	var canvas = document.getElementById("canvas");
	// Setting canvas size
	canvas.width = 640;
	canvas.height = 480;
	load();
	// Creates a 2D drawing
	var ctx = canvas.getContext('2d');
	// Calls the draw function
	draw(ctx);
	}
var x = 10;
var y = 10;
function draw(ctx)
{
	// Set clear colour to gray and fetch width and height from canvas
	ctx.fillStyle = 'gray';
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	// Set future fill colour to red
	ctx.drawImage(playerImage, x, y);
	// Ask the browser to call this function again as soon as it can
	window.requestAnimationFrame(function(){draw(ctx);});
	}
function keydown(event)
{
	if(event.key == "ArrowLeft")
	{
		x = x - 5;
	}
	else if(event.key == "ArrowRight")
	{
		x = x + 5;
	}
	else if(event.key == "ArrowUp")
	{
		y = y - 5;
	}
	else if(event.key == "ArrowDown")
	{
		y = y + 5;
	}
}
				
window.onload = main;
window.addEventListener("keydown", keydown);