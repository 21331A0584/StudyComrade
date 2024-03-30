const form = document.getElementById('myForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Get the year and semester select elements
    const yearSelect = document.getElementById('year');
    const semesterSelect = document.getElementById('semester');
    
    // Check if year or semester is not selected
    if (yearSelect.value === '' || semesterSelect.value === '') {
        // Prevent the default form submission
        event.preventDefault();
        
        // Display a message to the user
        alert('Please select both year and semester.');
    }
});
var slideIndex = 1;
showSlides(slideIndex);

function getIndexVars() {
  var iyear = document.getElementById("year").value;
  var isem = document.getElementById("sem").value;
  localStorage.setItem("yearval", iyear);
  localStorage.setItem("semval", isem);
}

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
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');


darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}


// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});




sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})