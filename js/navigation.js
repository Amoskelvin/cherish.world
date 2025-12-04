// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navList = document.getElementById('navList');

if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('header__nav-list--open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navList.contains(e.target)) {
            navList.classList.remove('header__nav-list--open');
        }
    });
}

//Active nav link highlighting
const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.header__nav-link');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentLocation) {
        link.classList.add('header__nav-link--active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
