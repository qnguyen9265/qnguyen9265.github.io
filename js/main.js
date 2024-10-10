//TODO: Move functionality into functions in scripts.js and call functions in main.js after DOM content is loaded

// Navbar scrolling starting past Hero section
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');
const heroHeight = heroSection.offsetHeight;

console.log('Navbar element:', navbar);
console.log('Hero Section element:', heroSection);

window.addEventListener('scroll', () => {
    console.log("Scroll Y:", window.scrollY);
    if (window.scrollY >= heroHeight) {
        navbar.classList.add('scrolled-navbar');
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    } else {
        navbar.classList.remove('scrolled-navbar');
        navbar.style.position = 'absolute';
        navbar.style.top = '100vh';
    }
});