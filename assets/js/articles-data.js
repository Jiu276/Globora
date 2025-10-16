// Articles data - all article metadata in one place
const articlesData = [
    {
        id: 'thredup-first-haul-guide-2025',
        title: 'Your First ThredUP Haul Awaits - Half Off!',
        slug: 'thredup-first-haul-guide-2025.html',
        excerpt: 'Ready to revolutionize your wardrobe while saving money and the planet? Your first ThredUP haul is calling your name, and it comes with an incredible half-off promotion! Discover the excitement of your first ThredUP haul with an exclusive half-off deal.',
        category: 'Fashion & Beauty',
        categorySlug: 'beauty',
        date: '2025-10-09',
        readTime: 12,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
        author: 'Globora Fashion Team',
        featured: true,
        views: '1.2k'
    },
    {
        id: 'mansur-gavriel-bags-guide-2025',
        title: 'The Iconic Water Bucket Bag & Timeless Totes',
        slug: 'mansur-gavriel-bags-guide-2025.html',
        excerpt: 'Discover the elegance of Mansur Gavriel\'s iconic bucket bags and timeless totes. Explore the brand\'s minimalist design philosophy and why these bags have become modern classics...',
        category: 'Fashion & Beauty',
        categorySlug: 'beauty',
        date: '2025-09-15',
        readTime: 8,
        image: 'assets/images/articles/bag.png',
        author: 'Globora Fashion Team',
        featured: true,
        views: '3.2k'
    },
    {
        id: 'fashion-style-guide-2025',
        title: '2025 Fall-Winter Fashion Guide: Creating Your Personal Style',
        slug: 'fashion-style-guide-2025.html',
        excerpt: 'The fall-winter season is approaching, and it\'s time to update your wardrobe. This styling guide includes color coordination theory, body optimization techniques, and the latest trend analysis...',
        category: 'Fashion & Beauty',
        categorySlug: 'beauty',
        date: '2025-08-12',
        readTime: 10,
        image: 'assets/images/articles/fashion-style.jpg',
        author: 'Globora Fashion Team',
        featured: true,
        views: '5.1k'
    },
    {
        id: 'digital-life-management-2025',
        title: 'Digital Life Management: Making Technology Work for You',
        slug: 'digital-life-management-2025.html',
        excerpt: 'In the digital age, proper use of various tools and applications can greatly improve life efficiency. From time management to financial planning, from health monitoring to learning progress...',
        category: 'Technology & Digital',
        categorySlug: 'tech',
        date: '2025-07-25',
        readTime: 15,
        image: 'assets/images/articles/digital-tools.jpg',
        author: 'Globora Tech Team',
        featured: true,
        views: '4.8k'
    },
    {
        id: 'home-fitness-guide-2025',
        title: 'Complete Home Fitness Guide: Creating Scientific Exercise Plans',
        slug: 'home-fitness-guide-2025.html',
        excerpt: 'No need for expensive gym memberships - you can enjoy professional-level workout experiences at home. This article provides complete home fitness solutions, including equipment recommendations and training plans...',
        category: 'Health & Fitness',
        categorySlug: 'health-fitness',
        date: '2025-06-08',
        readTime: 18,
        image: 'assets/images/articles/fitness-equipment.jpg',
        author: 'Globora Health Team',
        featured: true,
        views: '6.3k'
    },
    {
        id: 'gourmet-cooking-guide-2025',
        title: '10 Secrets to Creating Michelin-Level Cuisine at Home',
        slug: 'gourmet-cooking-guide-2025.html',
        excerpt: 'Want to create restaurant-quality cuisine at home? From ingredient selection to cooking techniques, from plating artistry to flavor pairing, these professional skills will help you elevate your culinary level...',
        category: 'Food & Lifestyle',
        categorySlug: 'guide',
        date: '2025-05-18',
        readTime: 16,
        image: 'assets/images/articles/kitchen-appliances.jpg',
        author: 'Globora Lifestyle Team',
        featured: true,
        views: '7.2k'
    },
    {
        id: 'eco-lifestyle-guide-2025',
        title: 'Eco-Friendly Living Guide: Protecting the Planet Through Small Actions',
        slug: 'eco-lifestyle-guide-2025.html',
        excerpt: 'Environmental protection is not only a responsibility, but also a lifestyle attitude. This article shares 25 practical eco-friendly living tips, including reducing plastic use, choosing sustainable products, energy conservation methods...',
        category: 'Lifestyle Guide',
        categorySlug: 'guide',
        date: '2025-04-22',
        readTime: 14,
        image: 'assets/images/articles/eco-lifestyle.jpg',
        author: 'Globora Lifestyle Team',
        featured: true,
        views: '5.9k'
    },
    {
        id: 'ai-tools-recommendation-2024',
        title: 'Top AI Tools Worth Following in 2025: Enhancing Life Efficiency',
        slug: 'ai-tools-recommendation-2024.html',
        excerpt: 'The rapid development of artificial intelligence technology has brought many conveniences to our daily lives. From ChatGPT to Midjourney, from voice assistants to smart translation, this article will recommend 15 practical AI tools to help you improve efficiency in work, study, and creativity...',
        category: 'Technology & Digital',
        categorySlug: 'tech',
        date: '2025-03-20',
        readTime: 18,
        image: 'assets/images/articles/ai-tools.jpg',
        author: 'Globora Tech Review Team',
        featured: true,
        views: '9.1k'
    },
    {
        id: 'beauty-skincare-guide-2024',
        title: '2025 Skincare & Beauty Product Buying Guide: Scientific Skincare for Radiant Beauty',
        slug: 'beauty-skincare-guide-2024.html',
        excerpt: 'Professional skincare and beauty product review guide, from cleansing to moisturizing, from sun protection to anti-aging, scientific skincare methods to help you choose the most suitable beauty products.',
        category: 'Fashion & Beauty',
        categorySlug: 'beauty',
        date: '2025-02-05',
        readTime: 22,
        image: 'assets/images/categories/beauty.jpg',
        author: 'Globora Beauty Team',
        featured: false,
        views: '4.5k'
    },
    {
        id: 'smart-home-guide-2024',
        title: 'Complete Smart Home Guide 2025: From Beginner to Expert',
        slug: 'smart-home-guide-2024.html',
        excerpt: 'Dive deep into smart home ecosystems, including smart speakers, smart bulbs, security systems, and other device selection and configuration methods.',
        category: 'Technology & Digital',
        categorySlug: 'tech',
        date: '2024-12-15',
        readTime: 20,
        image: 'assets/images/articles/smart-home-guide.jpg',
        author: 'Globora Tech Team',
        featured: false,
        views: '8.7k'
    },
    {
        id: 'kitchen-appliances-2024',
        title: 'Top Kitchen Gadgets Worth Buying in 2025',
        slug: 'kitchen-appliances-2024.html',
        excerpt: 'Handpicked 15 practical kitchen appliances, from multi-functional food processors to smart ovens, making cooking easier and more enjoyable.',
        category: 'Product Reviews',
        categorySlug: 'reviews',
        date: '2024-11-28',
        readTime: 16,
        image: 'assets/images/articles/kitchen-appliances.jpg',
        author: 'Globora Review Team',
        featured: false,
        views: '6.8k'
    },
    {
        id: 'healthy-lifestyle-guide-2025',
        title: 'Building a Healthy Lifestyle: 15 Practical Tips',
        slug: 'healthy-lifestyle-guide-2025.html',
        excerpt: 'From dietary habits to exercise plans, from sleep quality to mental health - scientific methods to comprehensively improve quality of life.',
        category: 'Health & Fitness',
        categorySlug: 'health-fitness',
        date: '2024-10-10',
        readTime: 14,
        image: 'assets/images/articles/health-lifestyle.jpg',
        author: 'Globora Health Team',
        featured: false,
        views: '7.5k'
    },
    {
        id: 'work-efficiency-guide-2025',
        title: '20 Golden Rules for Improving Work Efficiency',
        slug: 'work-efficiency-guide-2025.html',
        excerpt: 'Combining time management theory with practical experience to share specific methods and tool recommendations for improving work efficiency.',
        category: 'Lifestyle Guide',
        categorySlug: 'guide',
        date: '2024-09-05',
        readTime: 17,
        image: 'assets/images/articles/work-efficiency.jpg',
        author: 'Globora Productivity Team',
        featured: false,
        views: '9.3k'
    },
    {
        id: 'small-apartment-design-2025',
        title: 'Small Space Interior Design: 30 Creative Inspiration Ideas',
        slug: 'small-apartment-design-2025.html',
        excerpt: 'Space optimization solutions designed specifically for small homes, including storage tips, color coordination, and furniture selection advice.',
        category: 'Home & Living',
        categorySlug: 'guide',
        date: '2024-08-20',
        readTime: 19,
        image: 'assets/images/articles/home-design.jpg',
        author: 'Globora Design Team',
        featured: false,
        views: '8.1k'
    },
    {
        id: 'investment-guide-2025',
        title: 'Financial Planning for Young Adults: A Beginner\'s Investment Guide',
        slug: 'investment-guide-2025.html',
        excerpt: 'Financial literacy for beginners, including fund investment, stock market basics, and risk management strategies.',
        category: 'Lifestyle Guide',
        categorySlug: 'guide',
        date: '2024-07-15',
        readTime: 25,
        image: 'assets/images/articles/investment-finance.jpg',
        author: 'Globora Finance Team',
        featured: false,
        views: '10.2k'
    }
];

// Utility functions for articles
const ArticlesManager = {
    // Get all articles sorted by date (newest first)
    getAllSorted: function() {
        return [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    // Get articles by category
    getByCategory: function(categorySlug) {
        return this.getAllSorted().filter(article => article.categorySlug === categorySlug);
    },

    // Get featured articles
    getFeatured: function(limit = null) {
        const featured = this.getAllSorted().filter(article => article.featured);
        return limit ? featured.slice(0, limit) : featured;
    },

    // Get recent articles
    getRecent: function(limit = 6) {
        return this.getAllSorted().slice(0, limit);
    },

    // Get article by ID
    getById: function(id) {
        return articlesData.find(article => article.id === id);
    },

    // Format date for display
    formatDate: function(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    },

    // Generate article card HTML
    generateArticleCard: function(article, includeMeta = true) {
        const articleUrl = `articles/${article.slug}`;
        const imageUrl = article.image.startsWith('http') ? article.image : article.image;

        return `
            <article class="post-card${article.featured ? ' featured' : ''}" onclick="window.location.href='${articleUrl}'">
                <div class="post-image">
                    <img src="${imageUrl}" alt="${article.title}" loading="lazy">
                </div>
                <div class="post-content">
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    ${includeMeta ? `
                    <div class="post-meta">
                        <span class="date">${this.formatDate(article.date)}</span>
                        <span class="category">${article.category}</span>
                    </div>
                    ` : ''}
                </div>
            </article>
        `;
    },

    // Generate article card HTML for category pages
    generateCategoryCard: function(article) {
        const articleUrl = `../articles/${article.slug}`;
        const imageUrl = article.image.startsWith('http') ? article.image : `../${article.image}`;

        return `
            <article class="article-card" onclick="window.location.href='${articleUrl}'" role="gridcell">
                <div class="article-image">
                    <img src="${imageUrl}" alt="${article.title}" width="400" height="250" loading="lazy">
                    <div class="article-category">${article.category}</div>
                </div>
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <div class="article-meta">
                        <time datetime="${article.date}" class="date"><i class="fas fa-calendar"></i> ${this.formatDate(article.date)}</time>
                        <span class="read-time"><i class="fas fa-clock"></i> ${article.readTime} min read</span>
                        <span class="views"><i class="fas fa-eye"></i> ${article.views} views</span>
                    </div>
                </div>
            </article>
        `;
    },

    // Render articles to container
    renderToContainer: function(containerId, articles, cardType = 'default') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = articles.map(article => {
            return cardType === 'category'
                ? this.generateCategoryCard(article)
                : this.generateArticleCard(article);
        }).join('');

        container.innerHTML = html;
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articlesData, ArticlesManager };
}
