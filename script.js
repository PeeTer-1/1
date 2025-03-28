document.addEventListener('DOMContentLoaded', () => {
    // อนิเมชันเมื่อ Scroll ด้วย Intersection Observer
    const animateOnScroll = (elements) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => {
            if (el.style.opacity !== '1') {
                observer.observe(el);
            }
        });
    };

    // กำหนด animation สำหรับแต่ละ element
    const workItems = document.querySelectorAll('.work-item');
    const socialButtons = document.querySelectorAll('.social-button');
    
    // เริ่มต้นตั้งค่าเริ่มต้น
    workItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(15px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    socialButtons.forEach(button => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(15px)';
        button.style.transition = 'all 0.5s ease';
    });
    
    // เรียกใช้ animation
    animateOnScroll([...workItems, ...socialButtons]);

    // เอฟเฟกต์พาร์ทิเคิลแบบสุ่ม
    function createParticles() {
        const container = document.querySelector('.particles');
        if (!container) return;
        
        // ลบ particles เดิมทั้งหมด
        container.innerHTML = '';
        
        // สร้าง particles ใหม่ (น้อยลงสำหรับมือถือ)
        const particleCount = Math.floor(window.innerWidth / 25);
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // สุ่มขนาด
            const size = Math.random() * 6 + 4;
            
            // สุ่มตำแหน่งและ animation
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                width: ${size}px;
                height: ${size}px;
                animation-delay: ${Math.random() * 3}s;
                animation-duration: ${Math.random() * 8 + 4}s;
                opacity: ${Math.random() * 0.4 + 0.3};
            `;
            
            container.appendChild(particle);
        }
    }

    // สร้าง particles ครั้งแรก
    createParticles();

    // เอฟเฟกต์การกระเด้งเมื่อ hover
    const addHoverEffect = (elements) => {
        elements.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.transform = 'translateY(-3px)';
            });
            
            item.addEventListener('mouseout', () => {
                item.style.transform = 'translateY(0)';
            });
        });
    };

    // เพิ่ม hover effect ให้กับ work items และ social buttons
    addHoverEffect(workItems);
    addHoverEffect(socialButtons);

    // เอฟเฟกต์เมื่อโฮเวอร์ที่โปรไฟล์
    const profile = document.querySelector('.profile');
    if (profile) {
        profile.addEventListener('mouseover', () => {
            profile.style.transform = 'translateY(-3px)';
        });
        
        profile.addEventListener('mouseout', () => {
            profile.style.transform = 'translateY(0)';
        });
    }

    // เพิ่ม animation สำหรับ overlay ของผลงาน
    workItems.forEach(item => {
        const overlay = item.querySelector('.work-overlay');
        if (overlay) {
            overlay.style.transition = 'all 0.4s ease';
            
            item.addEventListener('mouseover', () => {
                overlay.style.transform = 'translateY(0)';
                overlay.style.opacity = '1';
            });
            
            item.addEventListener('mouseout', () => {
                overlay.style.transform = 'translateY(100%)';
                overlay.style.opacity = '0';
            });
        }
    });
});