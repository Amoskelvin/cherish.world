// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.card, .section-header, .stats__item').forEach(el => {
    observer.observe(el);
});

// Animated Counter for Stats
function animateCounter(element) {
    const target = element.textContent;
    const number = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/[\d,]/g, '');
    const duration = 2000;
    const increment = number / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = entry.target.querySelector('.stats__value');
            if (value && !value.classList.contains('animated')) {
                value.classList.add('animated');
                animateCounter(value);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stats__item').forEach(item => {
    statsObserver.observe(item);
});

// Filter Tabs (for portfolio page)
const filterTabs = document.querySelectorAll('.filter-tab');
const filterableCards = document.querySelectorAll('[data-category]');

if (filterTabs.length > 0) {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('filter-tab--active'));
            // Add active class to clicked tab
            this.classList.add('filter-tab--active');

            const filter = this.dataset.filter;

            // Filter cards
            filterableCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
