document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initProjectFilter();
    initN8nContact(); // هادي هي الدالة الجديدة اللي غاتصيفط لـ n8n
});

// --- Mobile Navigation ---
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
}

// --- Project Filtering ---
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    if (filterBtns.length === 0) return;
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// --- n8n Webhook Integration ---
function initN8nContact() {
    // تأكد أن هاد الـ ID هو اللي عندك فـ الـ HTML
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) {
        console.log("Form not found on this page.");
        return;
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // جمع البيانات
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        console.log("Sending to n8n...", formData);

        try {
            const response = await fetch('https://limit22.app.n8n.cloud/webhook/portfolio-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Failed to send message. Please check CORS settings in n8n.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error connecting to n8n.');
        }
    });
}
