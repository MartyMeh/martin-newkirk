// Navigation HTML and JavaScript
(function() {
    // Get current page to mark active link (support both clean URLs and .html paths)
    const currentPath = window.location.pathname;
    const currentPage = (currentPath === '/' || currentPath === '/index.html' || currentPath === '') ? 'home' :
                       (currentPath === '/cv' || currentPath.includes('cv.html')) ? 'cv' :
                       (currentPath === '/photonik-metrics' || currentPath.includes('photonik-metrics')) ? 'photonik' :
                       (currentPath === '/uber-carshare' || currentPath.includes('uber-carshare')) ? 'uber' :
                       (currentPath === '/newkirk-solar' || currentPath.includes('newkirk-solar')) ? 'solar' :
                       (currentPath === '/community' || currentPath.includes('community')) ? 'community' : '';

    // Navigation HTML
    const navHTML = `
        <div class="nav-container">
            <div class="nav-home">
                <a href="/">Home</a>
            </div>
            <button class="hamburger" id="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul id="nav-menu">
                <li><a href="/" ${currentPage === 'home' ? 'class="active"' : ''}>Home</a></li>
                <li><a href="/cv.html" ${currentPage === 'cv' ? 'class="active"' : ''}>CV</a></li>
                <li><a href="/photonik-metrics.html" ${currentPage === 'photonik' ? 'class="active"' : ''}>Photonik & CER</a></li>
                <li><a href="/uber-carshare.html" ${currentPage === 'uber' ? 'class="active"' : ''}>Uber Carshare</a></li>
                <li><a href="/newkirk-solar.html" ${currentPage === 'solar' ? 'class="active"' : ''}>Newkirk Solar</a></li>
                <li><a href="/community.html" ${currentPage === 'community' ? 'class="active"' : ''}>Interests</a></li>
                <li><a href="#" class="download-btn">Download PDF CV</a></li>
            </ul>
            <div class="nav-download">
                <a href="#" class="download-btn">Download PDF CV</a>
            </div>
        </div>
    `;

    // Inject navigation when DOM is ready
    function initNavigation() {
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.outerHTML = `<nav>${navHTML}</nav>`;
        } else {
            // Fallback: look for existing nav and replace it
            const existingNav = document.querySelector('nav');
            if (existingNav) {
                existingNav.innerHTML = navHTML;
            }
        }

        // Initialize hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
                if (!isClickInsideNav && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        // Handle download button clicks (excluding the video button)
        // Only redirect if we're not already on the CV page (let CV page handle its own download)
        const downloadBtns = document.querySelectorAll('.download-btn:not(#view-intro-video)');
        const isOnCVPage = currentPath.includes('cv.html');
        
        if (!isOnCVPage) {
            // Only attach redirect handlers if we're NOT on the CV page
            downloadBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Navigate to CV page with download parameter
                    window.location.href = '/cv.html?download=true';
                });
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();

