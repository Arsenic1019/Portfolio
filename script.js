
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('❌ Please fill in all fields');
        return;
    }

    if (!email.includes('@')) {
        alert('❌ Please enter a valid email');
        return;
    }

    alert('✅ Message sent successfully!');
    form.reset();
});


const fadeElements = document.querySelectorAll('.section');

const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();
