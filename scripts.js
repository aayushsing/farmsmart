document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        fetch('/contact', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your message!');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem submitting your form. Please try again.');
        });
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(loginForm);
        fetch('/login', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            alert('Logged in successfully!');
            loginForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem logging in. Please try again.');
        });
    });

    // Pop-up window for registration
    const registerLink = document.getElementById('register-link');
    const registerPopup = document.getElementById('register-popup');
    const closePopup = document.querySelector('.close');

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        registerPopup.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == registerPopup) {
            registerPopup.style.display = 'none';
        }
    });
});
