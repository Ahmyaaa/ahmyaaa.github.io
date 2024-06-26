// SCROLL TO TOP

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/Hide the scroll-to-top button based on scroll position
window.onscroll = function() {
    showScrollTopButton();
};

function showScrollTopButton() {
    var scrollTopButton = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}


// PROJECT SLIDESHOW

var slideIndex = 1; // Start with the first slide
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  // If reached the end of slides, go back to the first slide
  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Add event listeners to the previous and next buttons
document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

// POPUPOVERLAY

document.addEventListener('DOMContentLoaded', function() {
  const popupOverlay = document.querySelector('.popup-overlay');
  const closeButton = document.querySelector('.close-btn');

  try {
      // Check if popup has been displayed before
      const popupDisplayed = localStorage.getItem('popupDisplayed');

      if (!popupDisplayed) {
          // Show the popup if it hasn't been displayed before
          popupOverlay.style.display = 'flex';
          localStorage.setItem('popupDisplayed', true);
      }

      function closePopup() {
          popupOverlay.classList.add('fade-out');
          setTimeout(function() {
              popupOverlay.style.display = 'none';
              popupOverlay.classList.remove('fade-out');
          }, 500); // Adjust the time according to your fade animation duration
      }

      closeButton.addEventListener('click', function() {
          closePopup();
      });
  } catch (error) {
      console.error('Error accessing localStorage:', error);
  }
});

// MENU-BAR

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });
});
