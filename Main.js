document.addEventListener('DOMContentLoaded', () => {

    const yearElement = document.getElementById('year');
    const form = document.getElementById('bookingForm');
    const message = document.getElementById('formMessage');
    const navbar = document.querySelector('.navbar');
    let lastScroll = window.scrollY;


    // Update the year in the footer
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Form submission handling
    if (form && message) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = form.querySelector('input[type="text"]').value.trim();
            message.classList.remove('d-none');
            message.textContent = `Grazie ${name || 'ospite'}! La tua richiesta è stata inviata. Ti contatteremo presto.`;
            form.reset();
        });
    }

    // Navbar hide on scroll
    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 120) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
            lastScroll = currentScroll;
        });
    }

});