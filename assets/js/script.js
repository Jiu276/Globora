// Performance optimized main script file
(function() {
    'use strict';
    
    // Utility functions
    const utils = {
        // Debounce function
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        // Throttle function
        throttle: function(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },
        
        // Get element
        $: function(selector) {
            return document.querySelector(selector);
        },
        
        // Get multiple elements
        $$: function(selector) {
            return document.querySelectorAll(selector);
        }
    };
    
    // Performance monitoring
    const performance = {
        init: function() {
            if ('performance' in window) {
                window.addEventListener('load', function() {
                    setTimeout(function() {
                        const perfData = window.performance.timing;
                        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                        console.log('Page load time:', pageLoadTime + 'ms');
                    }, 0);
                });
            }
        }
    };
    
    // Navigation management
    const navigation = {
        init: function() {
            this.setupMobileMenu();
            this.setupSmoothScroll();
            this.setupStickyHeader();
        },
        
        setupMobileMenu: function() {
            const mobileToggle = utils.$('.mobile-menu-toggle');
            const navMenu = utils.$('.nav-menu');
            
            if (!mobileToggle || !navMenu) return;
            
            mobileToggle.addEventListener('click', function() {
                const isActive = mobileToggle.classList.contains('active');
                
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = isActive ? '' : 'hidden';
                
                mobileToggle.setAttribute('aria-expanded', !isActive);
            });
            
            navMenu.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        },
        
        setupSmoothScroll: function() {
            utils.$$('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#') return;
                    
                    e.preventDefault();
                    const target = utils.$(href);
                    
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },
        
        setupStickyHeader: function() {
            const header = utils.$('.header');
            if (!header) return;
            
            const handleScroll = utils.throttle(function() {
                const scrollY = window.pageYOffset;
                header.classList.toggle('scrolled', scrollY > 50);
            }, 16);
            
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
    };
    
    // Image lazy loading management
    const lazyLoading = {
        init: function() {
            this.setupImageLazyLoading();
        },
        
        setupImageLazyLoading: function() {
            if (!('IntersectionObserver' in window)) {
                utils.$$('img[data-src]').forEach(img => {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                });
                return;
            }
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        const tempImg = new Image();
                        tempImg.onload = function() {
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            observer.unobserve(img);
                        };
                        tempImg.onerror = function() {
                            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4=';
                            img.classList.add('error');
                            observer.unobserve(img);
                        };
                        tempImg.src = img.dataset.src;
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });
            
            utils.$$('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    };
    
    // Animation management
    const animations = {
        init: function() {
            this.setupScrollAnimations();
        },
        
        setupScrollAnimations: function() {
            if (!('IntersectionObserver' in window)) return;
            
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        element.style.animationDelay = Math.random() * 0.3 + 's';
                        element.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            utils.$$('.post-card, .product-card').forEach(card => {
                animationObserver.observe(card);
            });
        }
    };
    
    // Back to top functionality
    const backToTop = {
        init: function() {
            this.setupBackToTop();
        },
        
        setupBackToTop: function() {
            const backToTopBtn = utils.$('.back-to-top');
            if (!backToTopBtn) return;
            
            const handleScroll = utils.throttle(function() {
                const scrollY = window.pageYOffset;
                backToTopBtn.classList.toggle('show', scrollY > 300);
            }, 16);
            
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    };
    
    // Form handling
    const forms = {
        init: function() {
            this.setupNewsletterForm();
            this.setupCardClicks();
        },
        
        setupNewsletterForm: function() {
            const form = utils.$('.newsletter-form');
            if (!form) return;
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const nameInput = this.querySelector('input[type="text"]');
                const emailInput = this.querySelector('input[type="email"]');
                const submitBtn = this.querySelector('button[type="submit"]');
                
                if (!nameInput.value.trim() || !emailInput.value.trim()) {
                    alert('Please fill in complete information');
                    return;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for subscribing! We will regularly send you exciting content.');
                    nameInput.value = '';
                    emailInput.value = '';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            });
        },
        
        setupCardClicks: function() {
            utils.$$('.post-card').forEach(card => {
                card.addEventListener('click', function() {
                    const onclick = this.getAttribute('onclick');
                    if (onclick) {
                        eval(onclick);
                    } else {
                        console.log('Clicked article:', card.querySelector('h3').textContent);
                    }
                });
            });
            
            utils.$$('.product-card').forEach(card => {
                card.addEventListener('click', function() {
                    const onclick = this.getAttribute('onclick');
                    if (onclick) {
                        eval(onclick);
                    } else {
                        console.log('Clicked product:', card.querySelector('h3').textContent);
                    }
                });
            });
        }
    };
    
    // Parallax effect
    const parallax = {
        init: function() {
            this.setupParallaxEffect();
        },
        
        setupParallaxEffect: function() {
            const banner = utils.$('.banner-image img');
            if (!banner) return;
            
            const handleScroll = utils.throttle(function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                banner.style.transform = `translate3d(0, ${rate}px, 0)`;
            }, 16);
            
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
    };
    
    // Main initialization function
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initModules);
        } else {
            initModules();
        }
    }
    
    function initModules() {
        try {
            performance.init();
            navigation.init();
            lazyLoading.init();
            animations.init();
            backToTop.init();
            forms.init();
            parallax.init();
            
            console.log('Globora website successfully initialized');
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
    
    // Start application
    init();
    
    // Export to global
    window.Globora = {
        utils: utils,
        navigation: navigation,
        lazyLoading: lazyLoading,
        animations: animations
    };
    
})();