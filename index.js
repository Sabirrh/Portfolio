var typed = new Typed(".typing" ,{
    strings:["student", "Web Developer"],
    typeSpeed:80,
    backSpeed:90,
    loop:true
});
// Get the navbar
var navbar = document.querySelector("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// When the user scrolls the page, run the stickyNavbar function
window.onscroll = function() {
  stickyNavbar();
};


 // ------------------------Smtp --------------------------//

 function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sabirrh12@gmail.com",
    Password : "password",
    To : 'sabirrh12@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "Name:" +document.getElementById("form-name").value
    + "<br> Email:" +document.getElementById("form-email").value
    +"<br> Message:" +document.getElementById("form-text").value,
}).then(
  message => alert("Thanks For Your Interest! Successfully Submitted")
);
}
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

  
  
  
