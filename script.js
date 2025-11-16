// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Button placeholders
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        alert('Link coming soon!');
    });
});
