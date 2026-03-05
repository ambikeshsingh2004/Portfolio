document.addEventListener('DOMContentLoaded', () => {
    // ============ PREMIUM CURSOR TRAIL ============
    const trailCount = 6;
    const trails = [];

    // Create cursor trail elements
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.opacity = (1 - i / trailCount) * 0.5;
        trail.style.transform = `scale(${1 - i / (trailCount * 2)})`;
        document.body.appendChild(trail);
        trails.push({
            el: trail,
            x: 0, y: 0
        });
    }

    const cursorGlow = document.getElementById('cursorGlow');
    const header = document.querySelector('.header');
    let mouseX = 0, mouseY = 0;
    let lastScrollTop = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (cursorGlow) {
            cursorGlow.classList.add('active');
            cursorGlow.style.left = mouseX + 'px';
            cursorGlow.style.top = mouseY + 'px';
        }
    });

    function animateTrails() {
        trails.forEach((trail, index) => {
            const prev = index === 0 ? { x: mouseX, y: mouseY } : trails[index - 1];
            trail.x += (prev.x - trail.x) * 0.15;
            trail.y += (prev.y - trail.y) * 0.15;
            trail.el.style.left = trail.x + 'px';
            trail.el.style.top = trail.y + 'px';
        });
        requestAnimationFrame(animateTrails);
    }
    animateTrails();

    // ============ ORGANIC PARTICLES ============
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + 'vh';
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particlesContainer.appendChild(particle);
    }

    if (particlesContainer) {
        for (let i = 0; i < particleCount; i++) createParticle();
    }

    // ============ PREMIUM TYPING EFFECT ============
    const typingText = document.getElementById('typingText');
    const roles = [
        'Full Stack Engineer',
        'System Designer',
        'Problem Solver',
        'Competitive Programmer'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        const displayChar = isDeleting
            ? currentRole.substring(0, charIndex--)
            : currentRole.substring(0, charIndex++);

        if (typingText) typingText.textContent = displayChar;

        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentRole.length + 1) {
            isDeleting = true;
            speed = 2000;
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            charIndex = 0;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }
    if (typingText) setTimeout(typeEffect, 1000);

    // ============ SCROLL REVEAL & ORB PARALLAX ============
    const orbs = document.querySelectorAll('.bg-orb');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .bubble, .mini-stat-card, .timeline-item, .contact-section').forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        // Header Hide on Scroll
        if (scrolled > 100) {
            if (scrolled > lastScrollTop) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        } else {
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrolled;

        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 0.1;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ============ MOBILE NAVIGATION ============
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // ============ SMOOTH ANCHOR SCROLLING ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            target && target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
