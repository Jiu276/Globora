// Page template components
const PageTemplates = {
    // Common header HTML
    getHeader: function(pageType = 'default') {
        const basePath = pageType === 'root' ? '' : '../';
        return `
    <div class="skip-links">
        <a href="#main-content" class="skip-link">Skip to main content</a>
    </div>
    
    <!-- Top contact information bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <span><i class="fas fa-envelope"></i> Contact us for partnerships: contact@globora.com</span>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- Header navigation -->
    <header class="header" role="banner">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="${basePath}index.html" aria-label="Return to homepage">
                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center" alt="Globora logo" width="200" height="80" style="border-radius: 8px;">
                    </a>
                </div>
                
                <nav class="main-nav" role="navigation" aria-label="Main navigation">
                    <ul class="nav-menu">
                        <li class="dropdown">
                            <a href="#">Featured Products <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="${basePath}articles/kitchen-appliances-2024.html">Best Kitchen Appliances</a></li>
                                <li><a href="${basePath}articles/smart-speaker-review-2024.html">Smart Home Devices</a></li>
                                <li><a href="${basePath}articles/health-wellness-products-2024.html">Health & Wellness Products</a></li>
                                <li><a href="${basePath}articles/fitness-equipment-guide-2024.html">Fitness Equipment</a></li>
                                <li><a href="${basePath}articles/beauty-skincare-guide-2024.html">Beauty & Skincare Products</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Blog <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="${basePath}categories/category-guide.html">Lifestyle Guides</a></li>
                                <li><a href="${basePath}categories/category-reviews.html">Product Reviews</a></li>
                                <li><a href="${basePath}categories/category-tips.html">Tips & Tricks</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Home Improvement <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Interior Design</a></li>
                                <li><a href="${basePath}articles/smart-home-guide-2024.html">Smart Home</a></li>
                                <li><a href="#">Furniture Selection</a></li>
                                <li><a href="#">Organization</a></li>
                            </ul>
                        </li>
                        <li><a href="${basePath}categories/category-tech.html">Technology</a></li>
                        <li><a href="${basePath}categories/category-beauty.html">Fashion & Beauty</a></li>
                        <li><a href="${basePath}categories/category-health-fitness.html">Health & Fitness</a></li>
                        <li><a href="${basePath}categories/category-entertainment.html">Entertainment</a></li>
                        <li><a href="${basePath}pages/contact.html">Contact & Collaboration</a></li>
                    </ul>
                    
                    <button class="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </div>
    </header>`;
    },

    // Common footer HTML
    getFooter: function() {
        return `
    <!-- Footer -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=180&h=60&fit=crop&crop=center" alt="Globora" style="border-radius: 6px;">
                        <p>Globora is dedicated to providing high-quality lifestyle content and product recommendations. We believe every detail in life deserves careful attention. From smart homes to health and wellness, from fashion and beauty to technology and digital, we carefully discover every product and method that can improve quality of life.</p>
                        <div class="contact-info">
                            <p><i class="fas fa-envelope"></i> contact@globora.com</p>
                            <p><i class="fas fa-phone"></i> +86 400-123-4567</p>
                            <p><i class="fas fa-map-marker-alt"></i> Beijing Chaoyang District xxx Building</p>
                        </div>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Site Navigation</h4>
                    <ul class="footer-links">
                        <li><a href="../pages/about.html">About Us</a></li>
                        <li><a href="../categories/category-guide.html">Latest Blog</a></li>
                        <li><a href="../categories/category-reviews.html">Product Reviews</a></li>
                        <li><a href="../pages/contact.html">Contact Us</a></li>
                        <li><a href="../pages/contact.html">Submit & Collaborate</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Subscribe to Newsletter</h4>
                    <p>Subscribe to our newsletter to get the latest lifestyle news and product recommendations.</p>
                    <form class="newsletter-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>© 2024 Globora - All Rights Reserved</p>
                    </div>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to top button -->
    <button class="back-to-top" id="backToTop" aria-label="Back to top">
        <i class="fas fa-arrow-up"></i>
    </button>`;
    },

    // Breadcrumb navigation
    getBreadcrumb: function(items) {
        let breadcrumbHtml = '<nav class="breadcrumb" role="navigation" aria-label="Breadcrumb navigation"><ol>';
        
        items.forEach((item, index) => {
            if (index === items.length - 1) {
                breadcrumbHtml += `<li class="current" aria-current="page">${item.name}</li>`;
            } else {
                breadcrumbHtml += `<li><a href="${item.url}">${item.name}</a></li>`;
            }
        });
        
        breadcrumbHtml += '</ol></nav>';
        return breadcrumbHtml;
    },

    // Article card
    getArticleCard: function(article) {
        return `
        <article class="post-card" onclick="window.location.href='${article.url}'" role="gridcell">
            <div class="post-image">
                <img src="${article.image}" alt="${article.imageAlt}" width="350" height="200" loading="lazy">
            </div>
            <div class="post-content">
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                ${article.date ? `<time datetime="${article.dateTime}" class="post-date">${article.date}</time>` : ''}
                ${article.category ? `<span class="post-category">${article.category}</span>` : ''}
            </div>
        </article>`;
    },

    // SEO meta tags
    getSEOMeta: function(page) {
        return `
    <meta name="keywords" content="${page.keywords}">
    <meta name="author" content="Globora">
    <meta name="robots" content="index,follow">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:type" content="${page.type || 'article'}">
    <meta property="og:image" content="${page.image || 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=630&fit=crop'}">
    <meta property="og:url" content="${page.url}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <link rel="canonical" href="${page.url}">`;
    }
};

// Export template object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PageTemplates;
}