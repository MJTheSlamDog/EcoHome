// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check localStorage or system preference
let currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);

// Toggle Function
darkModeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);

  // Emoji toggle: 🌞 (light) vs 🌙 (dark)
    darkModeToggle.textContent = currentTheme === 'light' ? '🌙' : '🌞';
});

// Set initial icon
darkModeToggle.textContent = currentTheme === 'light' ? '🌙' : '🌞';