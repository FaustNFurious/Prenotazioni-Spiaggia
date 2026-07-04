document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const form = document.getElementById('bookingForm');
    const message = document.getElementById('formMessage');

    if (form && message) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = form.querySelector('input[type="text"]').value.trim();
            message.classList.remove('d-none');
            message.textContent = `Grazie ${name || 'ospite'}! La tua richiesta è stata inviata. Ti contatteremo presto.`;
            form.reset();
        });
    }
});