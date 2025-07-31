/* Optional: Shrink navbar on scroll */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 2rem';
        navbar.style.boxShadow = '0 2px 5px var(--shadow)';
    } else {
        navbar.style.padding = '1rem 2rem';
        navbar.style.boxShadow = '0 2px 10px var(--shadow)';
    }
});


// Hamburger Menu Toggle (Mobile)
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', 
        hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
        }
    });
});

// Sign In Button (Will later link to auth)
document.querySelector('.signin-btn').addEventListener('click', () => {
    alert("Sign In functionality coming soon!");
});

// Enhanced Dark Mode Toggle (Applies to ALL sections)
const darkModeToggle = document.querySelector('.dark-mode-toggle');
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    darkModeToggle.textContent = theme === 'dark' ? '🌞' : '🌙';
    
    // Special adjustments for stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsSection.style.backgroundColor = theme === 'dark' 
        ? '#1E1E1E' 
        : 'var(--primary-blue)';
    }
}

// Initialize
applyTheme(currentTheme);

// Toggle Function
darkModeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
});

// script.js - Mock Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filter products (mock)
    const filter = btn.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) 
        ? 'block' 
        : 'none';
    });
    });
});

// Cart Simulation
let cartCount = 0;
const cartItems = [];

// Function to handle "Add to Cart"
function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartCount++;
    
    // Show visual feedback
    const cartNotification = document.createElement('div');
    cartNotification.className = 'cart-notification';
    cartNotification.textContent = `${productName} added to cart! (${cartCount} items)`;
    document.body.appendChild(cartNotification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        cartNotification.style.opacity = '0';
        setTimeout(() => cartNotification.remove(), 300);
    }, 3000);
}

// Hero CTA Button (Explore Ideas)
document.querySelector('.hero .cta-btn').addEventListener('click', () => {
  addToCart("Smart Home Starter Guide", 0); // Free guide
});

// Product Add-to-Cart Buttons
document.querySelectorAll('.product-card .cta-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const price = productCard.querySelector('.price').textContent.split(' ')[0];
        
        addToCart(productName, price);
        
        // Button animation
        this.textContent = 'Added!';
        this.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.style.backgroundColor = 'var(--primary-blue)';
        }, 2000);
    });
});

// Update cart count display
const cartCountElement = document.querySelector('.cart-count');
if (cartCountElement) {
    cartCountElement.textContent = cartCount;
}

// Toggle between signed-in/signed-out UI
const signInBtn = document.querySelector('.signin-btn');
signInBtn.addEventListener('click', () => {
    signInBtn.textContent = 'My Account';
    signInBtn.style.backgroundColor = '#4CAF50';
    
    // Show a fake "welcome" toast notification
    const toast = document.createElement('div');
    toast.textContent = 'Welcome back, Alex!';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = '#333';
    toast.style.color = 'white';
    toast.style.padding = '1rem';
    toast.style.borderRadius = '4px';
    toast.style.zIndex = '1000';
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
});

// script.js - Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Animated Counter
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation duration in ms

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounters, 1);
        } else {
        counter.innerText = target + (counter.dataset.target === "98" ? "%" : "+");
        }
    });
}

// Trigger on scroll
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        animateCounters();
        window.removeEventListener('scroll', this);
    }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
        
        // Close other open items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger').setAttribute('aria-expanded', 
        document.querySelector('.hamburger').getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
});