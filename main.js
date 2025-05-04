document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // Initial call
  
  // Scroll reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements to animate
  const animatedElements = document.querySelectorAll('.gallery-item, .card, .section-title');
  animatedElements.forEach(element => {
    revealOnScroll.observe(element);
  });
  
  // Apply staggered animation to gallery items
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // Add 'scrolled' class to navbar when page is loaded if needed
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }
  
  // Add smooth hover effect to buttons
  const buttons = document.querySelectorAll('.btn, .social-link');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });
});

// Additional styles for navbar when scrolled
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-background').trim();
    navbar.style.boxShadow = getComputedStyle(document.documentElement)
      .getPropertyValue('--shadow-md');
  } else {
    navbar.style.backgroundColor = 'rgba(var(--color-background-rgb), 0.8)';
    navbar.style.boxShadow = 'none';
  }
});