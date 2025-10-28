// I Am Tehran Website JavaScript
// Modern, interactive features and animations

// Initialize page loader immediately
initPageLoader();

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initEventFilters();
    initCalendar();
    initShopFeatures();
    initContactForm();
    initFAQ();
    initCart();
    initAccessibility();
    initVideoPlayers();
});

// Page Loader functionality
function initPageLoader() {
    window.addEventListener('load', function() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            // Add a small delay for smoother transition
            setTimeout(function() {
                loader.classList.add('loaded');
                // Remove loader from DOM after transition
                setTimeout(function() {
                    loader.style.display = 'none';
                }, 500);
            }, 300);
        }
    });
    
    // Fallback: Hide loader after 5 seconds even if page isn't fully loaded
    setTimeout(function() {
        const loader = document.getElementById('page-loader');
        if (loader && !loader.classList.contains('loaded')) {
            loader.classList.add('loaded');
            setTimeout(function() {
                loader.style.display = 'none';
            }, 500);
        }
    }, 5000);
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = 'none';
            }

            // Navbar is always visible - no hide/show behavior
            navbar.style.transform = 'translateY(0)';
        });
    }
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation with stagger effect
    const fadeSelectors = [
        'section',
        '.container > *',
        '.service-card',
        '.news-card',
        '.product-card',
        '.event-card',
        '.testimonial-card',
        '.about-content',
        '.section-header',
        '.about-text',
        '.about-image',
        '.services-grid > *',
        '.news-item',
        '.cta-content',
        '.press-article',
        '.video-card',
        '.instagram-card',
        '.videos-grid > *',
        '.instagram-grid > *',
        '.story-content',
        '.timeline-item',
        '.today-card',
        '.academic-card',
        '.comedy-highlight',
        '.value',
        '.style-card',
        '.performance-card',
        '.show-item',
        '.category-card',
        '.contact-card',
        '.info-card',
        '.advantage-card',
        '.faq-item',
        '.hero-text',
        '.hero-image',
        '.hero-buttons',
        '.hero-stats'
    ];
    const animateElements = document.querySelectorAll(fadeSelectors.join(','));
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in-scroll');
        // Subtle delay between elements - reduced for faster response
        el.style.transitionDelay = `${Math.min(index * 0.03, 0.15)}s`;
        observer.observe(el);
    });

    // Smooth parallax effect for hero (subtle)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                
                // Parallax for hero background (only on home page, very subtle)
                const hero = document.querySelector('.hero');
                if (hero && scrolled < window.innerHeight) {
                    const rate = scrolled * 0.15;
                    hero.style.transform = `translateY(${rate}px)`;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// General animations
function initAnimations() {
    // Counter animation for stats
    const counters = document.querySelectorAll('.stat h3');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Typing effect for hero titles
    const heroTitles = document.querySelectorAll('.hero-title');
    heroTitles.forEach(title => {
        if (title.textContent.includes('I AM TEHRAN')) {
            typeWriter(title, 'I AM TEHRAN', 100);
        }
    });

    // Hover effects for cards - removed to prevent transition override
    // CSS handles all hover effects now for better performance
}

// Counter animation function
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number based on the original text
        const originalText = element.textContent;
        if (originalText.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else if (originalText.includes('K')) {
            element.textContent = Math.floor(current) + 'K+';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Typewriter effect
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Event filters functionality
function initEventFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const eventCards = document.querySelectorAll('.event-card');
    const viewButtons = document.querySelectorAll('.view-btn');
    const eventsGrid = document.getElementById('events-grid');
    const calendarView = document.getElementById('calendar-view');

    // Filter functionality
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter events
            eventCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.classList.add('animate-fadeInUp');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // View toggle functionality
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Toggle views
            if (view === 'calendar') {
                eventsGrid.style.display = 'none';
                calendarView.style.display = 'block';
                generateCalendar();
            } else {
                eventsGrid.style.display = 'grid';
                calendarView.style.display = 'none';
            }
        });
    });
}

// Calendar functionality
function initCalendar() {
    const prevBtn = document.getElementById('prev-period');
    const nextBtn = document.getElementById('next-period');
    const todayBtn = document.getElementById('today-btn');
    const dateDisplay = document.getElementById('current-date-display');
    const calendarGrid = document.getElementById('calendar-grid');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    if (calendarGrid) {
        // Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                generateCalendar();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                generateCalendar();
            });
        }

        if (todayBtn) {
            todayBtn.addEventListener('click', function() {
                const today = new Date();
                currentMonth = today.getMonth();
                currentYear = today.getFullYear();
                generateCalendar();
            });
        }
    }

    function generateCalendar() {
        if (!calendarGrid) return;

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        // Update date display
        if (dateDisplay) {
            dateDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        }

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const today = new Date();

        calendarGrid.innerHTML = '';

        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            dayElement.appendChild(dayNumber);

            // Check if this day has events
            if (hasEventOnDay(day)) {
                dayElement.classList.add('has-event');
                dayElement.addEventListener('click', function() {
                    showEventsForDay(day);
                });
            }

            // Highlight today
            if (day === today.getDate() && 
                currentMonth === today.getMonth() && 
                currentYear === today.getFullYear()) {
                dayElement.classList.add('today');
            }

            calendarGrid.appendChild(dayElement);
        }
    }

    function hasEventOnDay(day) {
        // Mock events data - in a real app, this would come from a database
        const events = [
            { day: 25, month: 4, title: 'Best Naked Party' },
            { day: 4, month: 4, title: 'Reggae Festival' },
            { day: 22, month: 4, title: 'Love | Love | Love' },
            { day: 14, month: 4, title: 'Avengers Power Event' },
            { day: 30, month: 4, title: 'Tehran Tonight' }
        ];

        return events.some(event => event.day === day && event.month === currentMonth);
    }

    function showEventsForDay(day) {
        // Show events for the selected day
        console.log(`Events for day ${day}`);
        // In a real app, this would show a modal or navigate to event details
    }

    // Initialize calendar
    if (calendarGrid) {
        generateCalendar();
    }
}

// Shop functionality
function initShopFeatures() {
    const productFilters = document.querySelectorAll('.filter-option');
    const sortSelect = document.querySelector('.sort-select');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');

    // Product filtering
    productFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            
            productFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products (in a real app, this would filter actual product data)
            filterProducts(category);
        });
    });

    // Product sorting
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            sortProducts(sortBy);
        });
    }

    // Add to cart functionality
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            
            addToCart(productName, productPrice);
            showCartNotification(productName);
        });
    });

    // Quick view functionality
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            showQuickView(productCard);
        });
    });
}

// Cart functionality
function initCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.querySelector('.checkout-btn');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Open cart
    function openCart() {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        updateCartDisplay();
    }

    // Close cart
    function closeCartSidebar() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Close cart event listeners
    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }

    // Update cart display
    function updateCartDisplay() {
        if (!cartItems || !cartTotal) return;

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="removeFromCart(${index})" class="remove-item">×</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
            
            total += parseFloat(item.price.replace('$', ''));
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Add to cart function
    window.addToCart = function(name, price) {
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    // Remove from cart function
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    // Checkout functionality
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // In a real app, this would redirect to checkout
            alert('Redirecting to checkout...');
            closeCartSidebar();
        });
    }

    // Make openCart globally available
    window.openCart = openCart;
}

// Contact form functionality
function initContactForm() {
    const reservationForm = document.getElementById('reservation-form');
    const contactForm = document.getElementById('contact-form');
    const messageOverlay = document.getElementById('message-overlay');
    const messageBox = document.getElementById('message-box');
    const messageClose = document.getElementById('message-close');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(function() {
                showMessage('success', 'Success!', 'Your reservation request has been sent successfully. We will contact you within 24 hours.');
                reservationForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(function() {
                if (typeof showMessage === 'function') {
                    showMessage('success', 'Thank You!', 'Your message has been sent successfully. We will contact you within 24 hours.');
                }
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Message display functionality
    function showMessage(type, title, text) {
        const messageIcon = document.getElementById('message-icon');
        const messageTitle = document.getElementById('message-title');
        const messageText = document.getElementById('message-text');
        
        messageIcon.className = `message-icon ${type}`;
        messageIcon.innerHTML = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
        messageTitle.textContent = title;
        messageText.textContent = text;
        
        messageOverlay.classList.add('show');
    }

    // Close message
    if (messageClose) {
        messageClose.addEventListener('click', function() {
            messageOverlay.classList.remove('show');
        });
    }

    if (messageOverlay) {
        messageOverlay.addEventListener('click', function(e) {
            if (e.target === messageOverlay) {
                messageOverlay.classList.remove('show');
            }
        });
    }

    // Form validation
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        // Remove existing error styling
        field.classList.remove('error');
        
        // Basic validation
        if (field.hasAttribute('required') && !value) {
            field.classList.add('error');
            return false;
        }
        
        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                return false;
            }
        }
        
        // Phone validation
        if (fieldName === 'phone' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\D/g, ''))) {
                field.classList.add('error');
                return false;
            }
        }
        
        return true;
    }
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Accessibility features
function initAccessibility() {
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.zIndex = '9999';
    
    skipLink.addEventListener('focus', function() {
        this.style.left = '6px';
        this.style.top = '6px';
        this.style.position = 'absolute';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.left = '-9999px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation for cards
    const interactiveCards = document.querySelectorAll('.event-card, .product-card, .news-card');
    interactiveCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });

    // Focus management for modals
    const modals = document.querySelectorAll('.cart-sidebar, .message-overlay');
    modals.forEach(modal => {
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.classList.remove('open', 'show');
                document.body.style.overflow = '';
            }
        });
    });

    // Announce dynamic content changes
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);

    window.announce = function(message) {
        announcer.textContent = message;
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    };
}

// Utility functions
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts(sortBy) {
    const productsGrid = document.querySelector('.products-grid');
    const products = Array.from(productsGrid.querySelectorAll('.product-card'));
    
    products.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                const priceA = parseFloat(a.querySelector('.current-price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.current-price').textContent.replace('$', ''));
                return priceA - priceB;
            case 'price-high':
                const priceA2 = parseFloat(a.querySelector('.current-price').textContent.replace('$', ''));
                const priceB2 = parseFloat(b.querySelector('.current-price').textContent.replace('$', ''));
                return priceB2 - priceA2;
            case 'rating':
                const ratingA = a.querySelectorAll('.stars i.fas').length;
                const ratingB = b.querySelectorAll('.stars i.fas').length;
                return ratingB - ratingA;
            default:
                return 0;
        }
    });
    
    products.forEach(product => productsGrid.appendChild(product));
}

function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${productName} added to cart!</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.2s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 200);
    }, 3000);
}

function showQuickView(productCard) {
    const productName = productCard.querySelector('h3').textContent;
    const productDescription = productCard.querySelector('.product-description').textContent;
    const productPrice = productCard.querySelector('.current-price').textContent;
    
    // Create quick view modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <h2>${productName}</h2>
                <p>${productDescription}</p>
                <div class="modal-price">${productPrice}</div>
                <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => document.body.removeChild(modal));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(modal);
        }
    });
    
    // Add to cart from modal
    const addToCartBtn = modal.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        addToCart(productName, productPrice);
        showCartNotification(productName);
        document.body.removeChild(modal);
    });
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Error handling (disabled to reduce console spam)
// window.addEventListener('error', function(e) {
//     console.error('JavaScript error:', e.error);
//     // In production, you might want to send this to an error tracking service
// });

// Service Worker registration (disabled for now)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/sw.js')
//             .then(function(registration) {
//                 console.log('ServiceWorker registration successful');
//             })
//             .catch(function(err) {
//                 console.log('ServiceWorker registration failed');
//             });
//     });
// }

// Video player functionality
function initVideoPlayers() {
    const videoFallbacks = document.querySelectorAll('.video-fallback');
    
    videoFallbacks.forEach(fallback => {
        fallback.addEventListener('click', function() {
            const thumbnail = this.closest('.video-thumbnail');
            const iframe = thumbnail.querySelector('iframe');
            const fallbackDiv = thumbnail.querySelector('.video-fallback');
            
            // Hide fallback and show iframe
            fallbackDiv.style.display = 'none';
            iframe.style.display = 'block';
            
            // Add autoplay to the iframe src
            const currentSrc = iframe.src;
            if (!currentSrc.includes('autoplay=1')) {
                iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'autoplay=1';
            }
        });
    });
}

// Video Modal Functions removed - videos are now embedded directly

// Make cart functions available even if cart doesn't exist
if (typeof openCart === 'undefined') {
    window.openCart = function() {
        console.log('Cart not initialized');
    };
}

if (typeof addToCart === 'undefined') {
    window.addToCart = function() {
        console.log('Cart not initialized');
    };
}

if (typeof removeFromCart === 'undefined') {
    window.removeFromCart = function() {
        console.log('Cart not initialized');
    };
}

// Export functions for global access
window.IAmTehran = {
    openCart: window.openCart,
    addToCart: window.addToCart,
    removeFromCart: window.removeFromCart
};
