// Form Validation and Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Basic validation
        if (!data.fullName || !data.orgName || !data.phone || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(data.phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Simulate form submission
        console.log('Form Data:', data);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form__success';
        successMessage.textContent = 'Thank you for your inquiry! We will contact you shortly.';

        contactForm.insertBefore(successMessage, contactForm.firstChild);

        // Reset form
        contactForm.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });

    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = 'var(--color-error)';
            } else {
                this.style.borderColor = '';
            }
        });

        input.addEventListener('input', function () {
            if (this.style.borderColor) {
                this.style.borderColor = '';
            }
        });
    });
}
