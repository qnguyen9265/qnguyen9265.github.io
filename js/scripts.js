function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    const heroBottom = heroSection.offsetHeight;
    
    if (window.scrollY > heroBottom) {
      navbar.classList.add('scrolled-navbar');
    } else {
      navbar.classList.remove('scrolled-navbar');
    }
  });
}