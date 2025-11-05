// ===================================
// INITIALIZE AOS ANIMATION
// ===================================

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// ACTIVE NAV LINK ON SCROLL
// ===================================

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// GALLERY CATEGORY FILTER SYSTEM
// Kategori Filtreleme Sistemi
// ===================================

// Sayfa yüklendikten sonra filtreleme sistemini başlat
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItemsAll = document.querySelectorAll('.gallery-item[data-category]');
    
    console.log('📸 Filter Sistemi Yüklendi');
    console.log('Buton sayısı:', filterBtns.length);
    console.log('Resim sayısı:', galleryItemsAll.length);
    
    // Başlangıçta sadece Cilt Bakımı göster (default)
    galleryItemsAll.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (itemCategory !== 'cilt_bakim') {
            item.style.display = 'none';
            item.classList.add('hide');
        }
    });
    console.log('✅ Default: Cilt Bakımı kategorisi gösteriliyor (6 resim)');
    
    // Filtreleme buton fonksiyonu
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Aktif butonu değiştir
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Seçilen kategori
            const filterValue = this.getAttribute('data-filter');
            console.log('🔍 Seçilen kategori:', filterValue);
            
            // Filtreleme yap
            let visibleCount = 0;
            
            galleryItemsAll.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (itemCategory === filterValue) {
                    // Eşleşen kategorileri göster
                    item.style.display = 'block';
                    item.classList.remove('hide');
                    visibleCount++;
                } else {
                    // Diğerlerini gizle
                    item.style.display = 'none';
                    item.classList.add('hide');
                }
            });
            
            console.log('✅ Görünen resim sayısı:', visibleCount);
            
            // AOS animasyonlarını yenile
            if (typeof AOS !== 'undefined') {
                setTimeout(() => {
                    AOS.refresh();
                }, 100);
            }
        });
    });
});

// ===================================
// MOBİLE GALLERY LOAD MORE BUTTON
// "Devamını Gör" - Sadece Mobile'da Aktif
// ===================================

const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenGallery = document.getElementById('hiddenGallery');

if (loadMoreBtn && hiddenGallery) {
    loadMoreBtn.addEventListener('click', () => {
        // Galeri durumunu kontrol et
        const isOpening = !hiddenGallery.classList.contains('show');
        
        if (isOpening) {
            // GALERİ AÇILMA (Mobile)
            hiddenGallery.classList.add('show');
            loadMoreBtn.classList.add('active');
            
            // Buton metnini değiştir
            const btnText = loadMoreBtn.querySelector('span');
            btnText.textContent = 'Daha Az Göster';
            
            // Smooth scroll
            setTimeout(() => {
                const firstItem = hiddenGallery.querySelector('.gallery-item');
                if (firstItem) {
                    firstItem.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
            }, 100);
            
            // AOS yenile
            if (typeof AOS !== 'undefined') {
                setTimeout(() => AOS.refresh(), 200);
            }
            
        } else {
            // GALERİ KAPANMA (Mobile)
            
            // Önce scroll
            loadMoreBtn.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // Sonra kapat
            setTimeout(() => {
                hiddenGallery.classList.remove('show');
                loadMoreBtn.classList.remove('active');
                
                const btnText = loadMoreBtn.querySelector('span');
                btnText.textContent = 'Devamını Gör';
            }, 400);
        }
    });
}

// ===================================
// GALLERY LIGHTBOX
// ===================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.querySelector('.close-lightbox');

// Update gallery items after load more
function updateGalleryItems() {
    return document.querySelectorAll('.gallery-item');
}

// Initialize lightbox for all gallery items (including hidden ones)
function initLightbox() {
    const allGalleryItems = updateGalleryItems();
    
    allGalleryItems.forEach(item => {
        // Remove old listeners to avoid duplicates
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
    });
    
    // Re-select and add new listeners
    const freshGalleryItems = updateGalleryItems();
    freshGalleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            lightboxImage.src = img.src;
            lightboxCaption.textContent = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}

// Initialize on page load
initLightbox();

// Re-initialize when load more is clicked
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        setTimeout(initLightbox, 100);
    });
}

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Merhaba! Ben ${name}. Randevu almak istiyorum.%0A%0ATelefon: ${phone}%0AMesaj: ${message}`;
    const whatsappURL = `https://wa.me/905529449275?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    alert('Mesajınız WhatsApp üzerinden gönderilecektir.');
});

// ===================================
// PARALLAX EFFECT ON HERO
// ===================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ===================================
// SERVICE CARDS HOVER EFFECT
// ===================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// LOADER ANIMATION (OPTIONAL)
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Refresh AOS after page load
    setTimeout(() => {
        AOS.refresh();
    }, 300);
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// ===================================
// REVEAL ELEMENTS ON SCROLL
// ===================================

const revealElements = document.querySelectorAll('.service-card, .gallery-item, .about-image, .about-text');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL)
// ===================================

const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = 'Cilt, güzellik ve estetiğin buluştuğu adres';

if (heroSubtitle) {
    heroSubtitle.textContent = '';
    let charIndex = 0;
    
    const typeWriter = () => {
        if (charIndex < subtitleText.length) {
            heroSubtitle.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// ===================================
// SCROLL INDICATOR HIDE ON SCROLL
// ===================================

const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200 && scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.visibility = 'hidden';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.visibility = 'visible';
    }
});

// ===================================
// PREVENT RIGHT-CLICK ON IMAGES (OPTIONAL)
// ===================================

const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment the line below to prevent right-click on images
        // e.preventDefault();
    });
});

// ===================================
// PHONE NUMBER CLICK TRACKING
// ===================================

const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.href);
        // You can add analytics tracking here
    });
});

// ===================================
// SOCIAL MEDIA LINKS TRACKING
// ===================================

const socialLinks = document.querySelectorAll('.social-links a, .footer-social a');

socialLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Social media link clicked:', link.href);
        // You can add analytics tracking here
    });
});

// ===================================
// RESPONSIVE IMAGE LOADING
// ===================================

const images_lazy = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images_lazy.forEach(img => imageObserver.observe(img));

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c Elif Akil Beauty Website ', 'background: linear-gradient(135deg, #b76e79, #a67c8a); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Developed by Ferhat Baydır ', 'color: #b76e79; font-size: 14px; font-weight: bold;');
console.log('%c Visit us at: Camiikebir Mah. İstiklal Cad. No:22 K:4 No:404, Elbir Plaza, Orhangazi / Bursa ', 'color: #666; font-size: 12px;');
console.log('%c Call us: 0552 944 92 75 ', 'color: #b76e79; font-size: 14px; font-weight: bold;');

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Optimized scroll functions
}, 10));

// ===================================
// PRELOAD CRITICAL IMAGES
// ===================================

const preloadImages = [
    'assets/logo.jpg',
    'insta_picture/1.png'
];

preloadImages.forEach(imagePath => {
    const img = new Image();
    img.src = imagePath;
});

// ===================================
// END OF SCRIPT
// ===================================

console.log('✅ All scripts loaded successfully!');

