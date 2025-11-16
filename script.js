// Smooth scrolling handled by CSS scroll-behavior
// Optional: you can add more JS for animations later

// Example: simple alert on download buttons for now
document.querySelectorAll('#download .btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        alert('Download link coming soon!');
    });
});

document.querySelectorAll('#docs .btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        alert('Documentation coming soon!');
    });
});
