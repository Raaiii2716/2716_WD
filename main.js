// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on page load

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Fix for iOS viewport height issue
    function setHeroHeight() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.height = window.innerHeight + 'px';
        }
    }

    setHeroHeight();
    window.addEventListener('resize', setHeroHeight);

    // Set active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Run once on load

    // Contact form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! We will contact you shortly.');
            contactForm.reset();
        });
    }

    // Payment form submission handling
    const paymentForm = document.getElementById("paymentForm");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Payment submitted successfully!");
            closeModal();
        });
    }

    // Modal background click close
    window.onclick = function (event) {
        const modal = document.getElementById("paymentModal");
        if (modal && event.target === modal) {
            closeModal();
        }
    };
});

// Modal open/close functions
function openModal() {
    const modal = document.getElementById("paymentModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeModal() {
    const modal = document.getElementById("paymentModal");
    if (modal) {
        modal.style.display = "none";
    }
}