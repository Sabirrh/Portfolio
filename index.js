var typed = new Typed(".typing" ,{
    strings:["Computer Science Student", "Web Developer"],
    typeSpeed:80,
    backSpeed:90,
    loop:true
});
var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function() {
  stickyNavbar();
};
    //-------------------------------------- EmailJS ------------------------------//
function sendEmail(event) {
  event.preventDefault();
  var name = document.getElementById("username").value;
  var email = document.getElementById("form-email").value;
  var message = document.getElementById("form-text").value;
  // set the parameter as per your template parameter[https://dashboard.emailjs.com/templates]
  var templateParams = {
    to_name: "Sabir",
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs
    .send("service_li4nmte", "template_s0swoxs", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        if (confirm("Message Sent Successfully.") == true) {
          window.location.reload();
        } 
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}
  
