// === Preloader ===
window.addEventListener('load', () => {
  console.log("Page fully loaded, hiding preloader..."); // Debugging log
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none'; // Hide the preloader after the page is fully loaded
});

// === Hamburger Menu Toggle ===
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// === Smooth Scroll for Navigation Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close mobile menu on link click
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

document.addEventListener('DOMContentLoaded', () => {
      const toggleButton = document.getElementById('uhv-toggle');
      const content = document.getElementById('uhv-paragraph');

      if (toggleButton && content) {
        toggleButton.addEventListener('click', () => {
          content.classList.toggle('show');
          
          // Change button text based on visibility
          if (content.classList.contains('show')) {
            toggleButton.textContent = 'Hide Content';
          } else {
            toggleButton.textContent = 'Basis for Humanistic Education';
          }
        });
      }
    });

// === Contact Form Submission ===
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Simulate backend submission
        console.log('Form Submitted:', data);
        alert('Thank you for your message! I will get back to you soon.');

        contactForm.reset();
    });
}
