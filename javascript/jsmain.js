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