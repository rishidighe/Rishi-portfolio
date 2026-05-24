document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor Logic ---
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('follower');
    const hoverElements = document.querySelectorAll('[data-hover]');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let followerX = window.innerWidth / 2;
    let followerY = window.innerHeight / 2;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        // Fast follow for the small dot
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        
        // Slow follow for the large ring
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // --- Background Orb Parallax ---
    const bgOrbs = document.querySelector('.bg-orbs');
    
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20; // Move up to 20px
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        // Gentle parallax opposite to mouse movement
        bgOrbs.style.transform = `translate(${-x}px, ${-y}px)`;
    });

    // --- Scroll Reveal Animations (Intersection Observer) ---
    const fadeUpElements = document.querySelectorAll('.fade-in-up');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeUpElements.forEach(element => {
        appearOnScroll.observe(element);
    });
    
});
