var typed = new Typed(".typing" ,{
    strings:["Computer Science Student", "Web Developer"],
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
// ---------------------------------------------------------------------------------------
// var type="text/javascript">
//     function setZoom() {
//      // Check if the 'style' property exists in the 'document.body' object
//      if ('style' in document.body) {
//              document.body.style.zoom = "85%";
//          } else {
//                 // Fallback for browsers that don't support 'style.zoom'
//                 // You can use CSS transform as a fallback
//             document.body.style.transform = "scale(0.9)";
//             document.body.style.transformOrigin = "0 0";
//             document.body.style.width = "111.11%"; /* (1 / 0.9) = 111.11% */
//             document.body.style.height = "111.11%"; /* (1 / 0.9) = 111.11% */
//             document.body.style.overflow = "hidden";
//           }
//     }
//         // Call the 'setZoom' function when the page is fully loaded
//         window.onload = setZoom;
  
  
