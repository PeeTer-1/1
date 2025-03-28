document.addEventListener('DOMContentLoaded', () => {
    // อนิเมชันเมื่อ Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.work-item, .social-button').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // เอฟเฟกต์พาร์ทิเคิล
    function createParticles() {
        const container = document.querySelector('.particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 3}s;
            `;
            container.appendChild(particle);
        }
    }
    createParticles();

    // เอฟเฟกต์การกระเด้ง
    document.querySelectorAll('.work-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-5px) rotate(2deg)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // เอฟเฟกต์เมื่อโฮเวอร์ที่ปุ่มโซเชียล
    document.querySelectorAll('.social-button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-5px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // เอฟเฟกต์เมื่อโฮเวอร์ที่โปรไฟล์
    const profile = document.querySelector('.profile');
    if (profile) {
        profile.addEventListener('mouseover', () => {
            profile.style.transform = 'translateY(-5px)';
        });
        profile.addEventListener('mouseout', () => {
            profile.style.transform = 'translateY(0)';
        });
    }
});