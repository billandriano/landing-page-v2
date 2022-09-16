var Form1= document.getElementById("Form1");
var Form2= document.getElementById("Form2");
var Form3= document.getElementById("Form3");
var Form4= document.getElementById("Form4");
var Form5= document.getElementById("Form5");
var Form6= document.getElementById("Form6");
var Form7= document.getElementById("Form7");
var Form8= document.getElementById("Form8");
var Form9= document.getElementById("Form9");

var letsdothis = document.getElementById("letsdothis");
var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");
var Next3 = document.getElementById("next3");
var Next4 = document.getElementById("next4");
var Next5 = document.getElementById("next5");
var Next6 = document.getElementById("next6");
var Next7 = document.getElementById("next7");
var Next8 = document.getElementById("next8");
var Booknow = document.getElementById("booknow");

var formname ='';
var formbusinessemail='';
var formbusinesswebsite='';
var formplatform = '';
var formmoney ='';
var formrating = '';
var formtime='';

letsdothis.addEventListener("click",letsdothisclick)

function letsdothisclick() {

  Form1.style.position="absolute";
  Form1.style.display="none";
  Form2.style.paddingTop= '0';

}

Next1.addEventListener("click",next1click)

function next1click() {
  if (document.getElementById("name").value==''){

  } else {
    formname = document.getElementById("name").value;
    document.getElementById("nameofuser").innerHTML=formname;
    Form2.style.position="absolute";
    Form2.style.display="none";
    Form3.style.paddingTop= '0';
  }
}

Next2.addEventListener("click",next2click)

function next2click() {
  if (document.getElementById("business-email").value==''){

  } else {
    if (document.getElementById("business-email").value.includes("@")) {
    formbusinessemail=document.getElementById("business-email").value;
    Form3.style.position="absolute";
    Form3.style.display="none";
    Form4.style.paddingTop= '0';
  } else {
     document.getElementById("business-email").setCustomValidity('invalid');

    }
  }
}

Next3.addEventListener("click",next3click)

function next3click() {
  formbusinesswebsite=document.getElementById("business-website").value;
  Form4.style.position="absolute";
  Form4.style.display="none";
  Form5.style.paddingTop= '0';

}

Next4.addEventListener("click",next4click)

function next4click() {
  
  formplatform=document.getElementById("digital-platforms").value;
  Form5.style.position="absolute";
  Form5.style.display="none";
  Form6.style.paddingTop= '0';


}

Next5.addEventListener("click",next5click)

function next5click() {

  if (document.getElementById("spendings").value==''){

  } else {
    formmoney = document.getElementById("spendings").value;
    Form6.style.position="absolute";
    Form6.style.display="none";
    Form7.style.paddingTop= '0';

  }
}


Next7.addEventListener("click",next7click)

function next7click() {
  if (document.getElementById("rating").value==''){

  } else {
    formrating=document.getElementById("rating").value;
    Form7.style.position="absolute";
    Form7.style.display="none";
    Form8.style.paddingTop= '0';
  }

}

Next8.addEventListener("click",next8click)

function next8click() {
  formtime=document.getElementById("time").value;
  document.getElementById("nameofuser2").innerHTML=formname;
  Form8.style.position="absolute";
  Form8.style.display="none";
  Form9.style.paddingTop= '0';

}


Booknow.addEventListener("click",senddata)

function senddata() {
  emailjs.send("service_kh7ohge","template_unh767b",{
jsname: formname,
jsbusinessemail:formbusinessemail,
jsbusinesswebsite : formbusinesswebsite,
jsplatform : formplatform,
jsmoney : formmoney,
jsformrating : formrating,
jsformtime : formtime,
});

}
