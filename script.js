// this is the Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking a link
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("uhv-toggle");
    const content = document.getElementById("uhv-content");

    toggleButton.addEventListener("click", function () {
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});


// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission (replace with actual backend logic)
    console.log('Form Submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});