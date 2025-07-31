// Hamburger Menu Toggle (Mobile)
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Sign In Button (Will later link to auth)
document.querySelector('.signin-btn').addEventListener('click', () => {
    alert("Sign In functionality coming soon!");
});