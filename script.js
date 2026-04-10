document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initFormValidation();
    initProjectFilter();
});

// --- Mobile Navigation --- //
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links (optional extra flair)
        const links = document.querySelectorAll('.nav-links li');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

// --- Form Validation --- //
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessages = document.getElementById('formMessages');

        // Basic validation
        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulated Submission
        showFormMessage('Thank you! Your message has been sent successfully.', 'success');
        form.reset();
    });
}

function showFormMessage(msg, type) {
    let msgDiv = document.getElementById('formMessages');
    if (!msgDiv) {
        msgDiv = document.createElement('div');
        msgDiv.id = 'formMessages';
        const form = document.getElementById('contactForm');
        form.prepend(msgDiv);
    }

    msgDiv.textContent = msg;
    msgDiv.className = `form-message ${type}`;

    // Auto remove after 5 seconds
    setTimeout(() => {
        msgDiv.remove();
    }, 5000);
}

// --- Project Filtering --- //
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterBtns.length === 0 || projectItems.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Small timeout to allow display:block to apply before animating opacity
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // match transition duration
                }
            });
        });
    });
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Form Submitted!");

        // جمع البيانات من الفورم
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            // حط رابط الـ Webhook ديال n8n هنا
            const response = await fetch('https://limit22.app.n8n.cloud/webhook-test/portfolio-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent! Check your Gmail for a confirmation.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}
