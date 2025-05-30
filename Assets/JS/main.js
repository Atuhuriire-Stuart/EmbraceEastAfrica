// ================ DOCUMENT READY ================
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initLogoAnimation();
    initSlideshow();
    initMissionCards();
    initFlagHoverEffects();
    initAnthemPlayer();
    initContactForm();
    initNavigation();
    initInteractiveMap();
});

// ================ LOGO ANIMATION ================
function initLogoAnimation() {
    const logo = document.getElementById('animated-logo');
    if (!logo) return;

    let angle = 0;
    let scaleDirection = 1;
    const pulseAnimation = () => {
        angle = (angle + 0.5) % 360;
        const currentScale = 1 + (0.05 * scaleDirection);

        logo.style.transform = `rotate(${angle}deg) scale(${currentScale})`;

        if (currentScale >= 1.05) scaleDirection = -1;
        if (currentScale <= 0.95) scaleDirection = 1;

        requestAnimationFrame(pulseAnimation);
    };
    pulseAnimation();
}

// ================ SLIDESHOW ================
function initSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;

    const slides = [
        {
            src: '../../Assets/Images/slide1.jpg',
            alt: 'East African Landscape',
            caption: 'Discover the Beauty of East Africa'
        },
        {
            src: '../../Assets/Images/slide2.jpg',
            alt: 'Wildlife',
            caption: 'Rich Wildlife Diversity'
        },
        {
            src: '../../Assets/Images/slide3.jpg',
            alt: 'Culture',
            caption: 'Vibrant Cultures'
        }
    ];

    let currentSlide = 0;
    let isPaused = false;
    let slideshowInterval;

    // Create slide elements
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.style.display = index === 0 ? 'block' : 'none';

        const img = document.createElement('img');
        img.src = slide.src;
        img.alt = slide.alt;

        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.textContent = slide.caption;

        slideElement.appendChild(img);
        slideElement.appendChild(caption);
        slideshowContainer.appendChild(slideElement);
    });

    // Pause button
    const pauseBtn = document.createElement('button');
    pauseBtn.className = 'slideshow-pause';
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    slideshowContainer.appendChild(pauseBtn);

    // Slide navigation
    function showSlide(index) {
        const allSlides = document.querySelectorAll('.slide');
        allSlides.forEach(slide => slide.style.display = 'none');
        allSlides[index].style.display = 'block';
        currentSlide = index;
    }

    function nextSlide() {
        const allSlides = document.querySelectorAll('.slide');
        const nextIndex = (currentSlide + 1) % allSlides.length;
        showSlide(nextIndex);
    }

    function startSlideshow() {
        slideshowInterval = setInterval(nextSlide, 5000);
    }

    function togglePause() {
        isPaused = !isPaused;
        pauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';

        if (isPaused) {
            clearInterval(slideshowInterval);
        } else {
            startSlideshow();
        }
    }

    // Event listeners
    pauseBtn.addEventListener('click', togglePause);
    startSlideshow();
}

// ================ MISSION CARDS ================
function initMissionCards() {
    const missionCards = document.querySelectorAll('.mission-card');
    if (!missionCards) return;

    missionCards.forEach(card => {
        card.addEventListener('click', function () {
            this.querySelector('.card-inner').classList.toggle('flipped');
        });
    });
}

// ================ FLAG HOVER EFFECTS ================
function initFlagHoverEffects() {
    const flagCards = document.querySelectorAll('.flag-card');
    if (!flagCards) return;

    flagCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.querySelector('.flag-overlay').style.opacity = '1';
        });

        card.addEventListener('mouseleave', function () {
            this.querySelector('.flag-overlay').style.opacity = '0';
        });
    });
}

// ================ ANTHEM PLAYER ================
function initAnthemPlayer() {
    const playBtn = document.querySelector('.play-anthem');
    if (!playBtn) return;

    playBtn.addEventListener('click', function () {
        // This would connect to an actual audio player
        alert('East African Anthem would now play!');
        this.innerHTML = '<i class="fas fa-volume-up"></i> Playing...';

        // Reset after 5 seconds (simulating song end)
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-play"></i> Play Anthem';
        }, 5000);
    });
}

// ================ CONTACT FORM ================
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const message = formData.get('message');

        // Simple validation
        if (message.trim().length < 10) {
            alert('Please enter a message with at least 10 characters.');
            return;
        }

        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send';
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ================ NAVIGATION ================
function initNavigation() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref && linkHref.includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (would need HTML element)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            document.querySelector('.nav-container').classList.toggle('mobile-open');
        });
    }
}

// ================ INTERACTIVE MAP ================
function initInteractiveMap() {
    const mapAreas = document.querySelectorAll('map area');
    if (!mapAreas) return;

    mapAreas.forEach(area => {
        area.addEventListener('mouseenter', function () {
            const country = this.getAttribute('title');
            // Would show tooltip or highlight country
        });

        area.addEventListener('click', function (e) {
            e.preventDefault();
            const countryUrl = this.getAttribute('href');
            if (countryUrl) window.location.href = countryUrl;
        });
    });
}

// ================ UTILITY FUNCTIONS ================
function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

// Window resize handler
window.addEventListener('resize', debounce(function () {
    // Handle responsive adjustments
}));