// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or use browser preference
  const savedTheme = localStorage.getItem('theme');
  const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (browserPrefersDark) {
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
  }
  
  // Toggle theme function
  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply smooth transition class before changing theme
    document.body.classList.add('theme-transition');
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Remove transition class after theme change is complete
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 500);
  }
  
  // Event listener for theme toggle button
  themeToggle.addEventListener('click', toggleTheme);
  
  // Add class for transition
  document.body.classList.add('theme-ready');
});