
//Send email button
document.querySelectorAll(".btn")[1].addEventListener("click",handleClick);

function sendmail() {
  var email = document.getElementById("email").value;
  if (email.includes("@")) {
    document.querySelectorAll(".btn-text")[0].classList.add("btn-email");
    document.querySelectorAll(".btn")[1].classList.add("btn-loading");
    emailjs.send("service_kh7ohge","template_nu1n8eq",{
    to_email: email,
  }).then(function(response) {
      document.querySelectorAll(".btn")[1].classList.remove("btn-loading");
      document.querySelectorAll(".check-email")[0].style.visibility = 'visible';


    }, function(error) {
       document.querySelectorAll(".btn")[1].classList.remove("btn-loading");
       document.querySelectorAll(".error-email")[0].style.visibility = 'visible';

    });

  } else {
    alert("The email is not valid");
  }

}

function hideckeckerror() {
  document.querySelectorAll(".check-email")[0].style.visibility = 'hidden';
  document.querySelectorAll(".error-email")[0].style.visibility = 'hidden';
  document.querySelectorAll(".btn-text")[0].classList.remove("btn-email");
}

function handleClick() {
  sendmail();
  setTimeout(hideckeckerror, 5000);
}
