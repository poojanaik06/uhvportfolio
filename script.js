// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
  }, 1000);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// UHV Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('uhv-toggle');
  const content = document.getElementById('uhv-content');

  if (toggleButton && content) {
    toggleButton.addEventListener('click', () => {
      content.classList.toggle('hidden');
      
      // Change button text based on visibility
      if (content.classList.contains('hidden')) {
        toggleButton.textContent = 'Basis for Humanistic Education';
      } else {
        toggleButton.textContent = 'Hide Content';
      }
    });
  }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Simulate form submission
    console.log('Form Submitted:', data);
    
    // Show success message
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending...';
    
    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.backgroundColor = '#10b981';
      contactForm.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.backgroundColor = '';
      }, 3000);
    }, 1500);
  });
}

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
      // Animate skill bars
      if (entry.target.id === 'skills') {
        document.querySelectorAll('.skill-level').forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.width = level;
        });
      }
    }
  });
}, {
  threshold: 0.1
});

// Observe all elements with 'animate' class
document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});
