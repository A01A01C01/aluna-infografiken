/**
 * ALUNA Documentation Main JavaScript
 * Handles page interactions, animations, and user experience enhancements
 */

// Application state
const app = {
    isLoaded: false,
    scrollPosition: 0,
    activeSection: null,
    observers: new Map()
};

/**
 * Initialize the application
 */
function initializeApp() {
    if (app.isLoaded) return;
    
    try {
        setupSmoothScrolling();
        setupIntersectionObserver();
        setupAccessibilityFeatures();
        setupPerformanceOptimizations();
        setupErrorHandling();
        
        app.isLoaded = true;
        console.log('ALUNA Documentation initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    // Handle clicks on internal links
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a[href^="#"]');
        if (!target) return;
        
        e.preventDefault();
        
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            smoothScrollTo(targetElement);
        }
    });
}

/**
 * Smooth scroll to element with offset for fixed headers
 */
function smoothScrollTo(element, offset = 80) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

/**
 * Setup intersection observer for section tracking and animations
 */
function setupIntersectionObserver() {
    // Options for intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0.1, 0.5, 0.9]
    };
    
    // Create observer for section tracking
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                app.activeSection = entry.target.id;
                updateActiveNavigation(entry.target.id);
            }
        });
    }, observerOptions);
    
    // Observe all main sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    app.observers.set('sections', sectionObserver);
    
    // Setup animation observer for fade-in effects
    setupAnimationObserver();
}

/**
 * Setup animation observer for fade-in effects
 */
function setupAnimationObserver() {
    const animationOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                animationObserver.unobserve(entry.target);
            }
        });
    }, animationOptions);
    
    // Observe elements that should animate in
    const animatedElements = document.querySelectorAll('.bg-white, .chart-container');
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
    
    app.observers.set('animations', animationObserver);
}

/**
 * Update active navigation (if navigation exists)
 */
function updateActiveNavigation(sectionId) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current section nav item
    const activeNavItem = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

/**
 * Setup accessibility features
 */
function setupAccessibilityFeatures() {
    // Add skip link for keyboard navigation
    addSkipLink();
    
    // Enhance focus management
    setupFocusManagement();
    
    // Add ARIA labels where needed
    enhanceARIALabels();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
}

/**
 * Add skip link for accessibility
 */
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Zum Hauptinhalt springen';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

/**
 * Setup focus management for better keyboard navigation
 */
function setupFocusManagement() {
    // Track focus for better UX
    let focusOutline = true;
    
    // Hide focus outline when using mouse
    document.addEventListener('mousedown', () => {
        focusOutline = false;
    });
    
    // Show focus outline when using keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            focusOutline = true;
        }
    });
    
    // Apply focus styles conditionally
    document.addEventListener('focusin', (e) => {
        if (focusOutline) {
            e.target.classList.add('keyboard-focus');
        }
    });
    
    document.addEventListener('focusout', (e) => {
        e.target.classList.remove('keyboard-focus');
    });
}

/**
 * Enhance ARIA labels for better screen reader support
 */
function enhanceARIALabels() {
    // Add labels to chart containers
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach((container, index) => {
        if (!container.getAttribute('aria-label')) {
            container.setAttribute('aria-label', `Interaktives Diagramm ${index + 1}`);
        }
    });
    
    // Add section labels
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const heading = section.querySelector('h2');
        if (heading && !section.getAttribute('aria-labelledby')) {
            if (!heading.id) {
                heading.id = `heading-${section.id || Math.random().toString(36).substr(2, 9)}`;
            }
            section.setAttribute('aria-labelledby', heading.id);
        }
    });
}

/**
 * Setup keyboard navigation
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Handle keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'Home':
                    e.preventDefault();
                    smoothScrollTo(document.body);
                    break;
                case 'End':
                    e.preventDefault();
                    smoothScrollTo(document.querySelector('footer') || document.body);
                    break;
            }
        }
        
        // Handle section navigation with arrow keys (when focus is on main content)
        if (e.target.tagName === 'MAIN' || e.target.tagName === 'BODY') {
            const sections = Array.from(document.querySelectorAll('section[id]'));
            const currentIndex = sections.findIndex(section => section.id === app.activeSection);
            
            switch (e.key) {
                case 'ArrowDown':
                case 'PageDown':
                    e.preventDefault();
                    if (currentIndex < sections.length - 1) {
                        smoothScrollTo(sections[currentIndex + 1]);
                    }
                    break;
                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    if (currentIndex > 0) {
                        smoothScrollTo(sections[currentIndex - 1]);
                    }
                    break;
            }
        }
    });
}

/**
 * Setup performance optimizations
 */
function setupPerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            app.scrollPosition = window.pageYOffset;
            handleScroll();
        }, 16); // ~60fps
    });
    
    // Lazy load images if any are added dynamically
    setupLazyLoading();
    
    // Preload critical resources
    preloadCriticalResources();
}

/**
 * Handle scroll events
 */
function handleScroll() {
    // Add scroll-dependent features here if needed
    // For example: show/hide scroll-to-top button, update progress bar, etc.
}

/**
 * Setup lazy loading for images
 */
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
        
        app.observers.set('images', imageObserver);
    }
}

/**
 * Preload critical resources
 */
function preloadCriticalResources() {
    // Preload Chart.js if not already loaded
    if (typeof Chart === 'undefined') {
        const chartScript = document.createElement('link');
        chartScript.rel = 'preload';
        chartScript.as = 'script';
        chartScript.href = 'https://cdn.jsdelivr.net/npm/chart.js';
        document.head.appendChild(chartScript);
    }
}

/**
 * Setup global error handling
 */
function setupErrorHandling() {
    // Handle JavaScript errors gracefully
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        
        // Show user-friendly error message for critical errors
        if (e.error && e.error.message && e.error.message.includes('Chart')) {
            showNotification('Einige Diagramme konnten nicht geladen werden. Bitte laden Sie die Seite neu.', 'warning');
        }
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        e.preventDefault();
    });
}

/**
 * Show notification to user
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type} fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm`;
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="flex-1">${message}</span>
            <button class="ml-4 text-lg leading-none" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Add appropriate styling based on type
    const styles = {
        info: 'bg-blue-100 text-blue-800 border border-blue-200',
        warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
        error: 'bg-red-100 text-red-800 border border-red-200',
        success: 'bg-green-100 text-green-800 border border-green-200'
    };
    
    notification.className += ' ' + styles[type];
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

/**
 * Cleanup function for when page is unloaded
 */
function cleanup() {
    // Disconnect all observers
    app.observers.forEach(observer => {
        observer.disconnect();
    });
    app.observers.clear();
    
    // Reset application state
    app.isLoaded = false;
    app.activeSection = null;
    app.scrollPosition = 0;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Cleanup on page unload
window.addEventListener('beforeunload', cleanup);

// Export for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        smoothScrollTo,
        showNotification,
        app
    };
}
