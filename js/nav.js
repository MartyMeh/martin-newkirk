// Navigation HTML and JavaScript
(function() {
    // Private pages configuration
    const PRIVATE_PAGES = [
        { path: '/interview-examples.html', title: 'Interview Examples' }
        // Add more private pages here as needed
    ];
    
    const PRIVATE_PASSWORD = 'StKilda84'; // Change this to your desired password
    
    // Check if user is authenticated
    function isAuthenticated() {
        return sessionStorage.getItem('privateAuth') === 'true';
    }
    
    // Set authentication
    function setAuthenticated(value) {
        if (value) {
            sessionStorage.setItem('privateAuth', 'true');
        } else {
            sessionStorage.removeItem('privateAuth');
        }
    }
    
    // Check if current page is private
    function isPrivatePage(path) {
        return PRIVATE_PAGES.some(page => path.includes(page.path));
    }
    
    // Protect private pages
    function protectPrivatePages() {
        const currentPath = window.location.pathname;
        if (isPrivatePage(currentPath) && !isAuthenticated()) {
            // Redirect to home if trying to access private page without auth
            window.location.href = '/';
        }
    }
    
    // Get current page to mark active link
    const currentPath = window.location.pathname;
    const currentPage = currentPath === '/' || currentPath === '/index.html' ? 'home' : 
                       currentPath.includes('cv.html') ? 'cv' :
                       currentPath.includes('photonik-metrics.html') ? 'photonik' :
                       currentPath.includes('uber-carshare.html') ? 'uber' :
                       currentPath.includes('newkirk-solar.html') ? 'solar' :
                       currentPath.includes('community.html') ? 'community' : 'home';

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
                <li><a href="/community.html" ${currentPage === 'community' ? 'class="active"' : ''}>Community</a></li>
                <li><a href="#" class="download-btn">Download PDF CV</a></li>
            </ul>
            <div class="nav-download">
                <a href="#" class="download-btn">Download PDF CV</a>
            </div>
            <div class="nav-private">
                <button class="private-lock" id="private-lock" aria-label="Private pages" title="Private pages">🔒</button>
            </div>
        </div>
    `;
    
    // Password modal HTML
    const passwordModalHTML = `
        <div class="password-modal" id="password-modal">
            <div class="password-modal-content">
                <h3>Private Pages Access</h3>
                <p>Enter password to access private pages:</p>
                <div class="password-input-group">
                    <input type="password" id="password-input" placeholder="Password" autocomplete="off">
                    <div class="password-error" id="password-error">Incorrect password. Please try again.</div>
                </div>
                <div class="private-pages-list">
                    <h4>Available Pages:</h4>
                    <ul id="private-pages-list"></ul>
                </div>
                <div class="password-modal-buttons">
                    <button class="password-modal-btn password-modal-btn-secondary" id="password-cancel">Cancel</button>
                    <button class="password-modal-btn password-modal-btn-primary" id="password-submit">Access</button>
                </div>
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
        
        // Add password modal to body
        if (!document.getElementById('password-modal')) {
            document.body.insertAdjacentHTML('beforeend', passwordModalHTML);
        }
        
        // Populate private pages list
        const privatePagesList = document.getElementById('private-pages-list');
        if (privatePagesList) {
            privatePagesList.innerHTML = PRIVATE_PAGES.map(page => 
                `<li><a href="${page.path}" class="private-page-link">${page.title}</a></li>`
            ).join('');
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
        
        // Handle private lock icon click
        const privateLock = document.getElementById('private-lock');
        const passwordModal = document.getElementById('password-modal');
        const passwordInput = document.getElementById('password-input');
        const passwordSubmit = document.getElementById('password-submit');
        const passwordCancel = document.getElementById('password-cancel');
        const passwordError = document.getElementById('password-error');
        const privatePageLinks = document.querySelectorAll('.private-page-link');
        
        if (privateLock && passwordModal) {
            // Open modal on lock click
            privateLock.addEventListener('click', function() {
                if (isAuthenticated()) {
                    // If already authenticated, show pages list
                    passwordModal.classList.add('active');
                    passwordInput.style.display = 'none';
                    passwordSubmit.style.display = 'none';
                    passwordCancel.textContent = 'Close';
                } else {
                    // Show password prompt
                    passwordModal.classList.add('active');
                    passwordInput.style.display = 'block';
                    passwordSubmit.style.display = 'block';
                    passwordCancel.textContent = 'Cancel';
                    passwordInput.focus();
                    passwordError.classList.remove('show');
                }
            });
            
            // Handle password submission
            if (passwordSubmit) {
                passwordSubmit.addEventListener('click', function() {
                    const enteredPassword = passwordInput.value;
                    if (enteredPassword === PRIVATE_PASSWORD) {
                        setAuthenticated(true);
                        passwordModal.classList.remove('active');
                        passwordInput.value = '';
                        passwordError.classList.remove('show');
                        // Enable private page links
                        privatePageLinks.forEach(link => {
                            link.style.pointerEvents = 'auto';
                            link.style.opacity = '1';
                        });
                    } else {
                        passwordError.classList.add('show');
                        passwordInput.value = '';
                        passwordInput.focus();
                    }
                });
            }
            
            // Handle cancel/close
            if (passwordCancel) {
                passwordCancel.addEventListener('click', function() {
                    passwordModal.classList.remove('active');
                    passwordInput.value = '';
                    passwordError.classList.remove('show');
                    passwordInput.style.display = 'block';
                    passwordSubmit.style.display = 'block';
                    passwordCancel.textContent = 'Cancel';
                });
            }
            
            // Handle Enter key in password input
            if (passwordInput) {
                passwordInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        passwordSubmit.click();
                    }
                });
            }
            
            // Close modal on outside click
            passwordModal.addEventListener('click', function(e) {
                if (e.target === passwordModal) {
                    passwordModal.classList.remove('active');
                    passwordInput.value = '';
                    passwordError.classList.remove('show');
                }
            });
            
            // Handle private page link clicks
            privatePageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (!isAuthenticated()) {
                        e.preventDefault();
                        passwordModal.classList.add('active');
                        passwordInput.focus();
                    }
                });
            });
            
            // If authenticated, enable private page links
            if (isAuthenticated()) {
                privatePageLinks.forEach(link => {
                    link.style.pointerEvents = 'auto';
                    link.style.opacity = '1';
                });
            } else {
                privatePageLinks.forEach(link => {
                    link.style.pointerEvents = 'none';
                    link.style.opacity = '0.5';
                });
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initNavigation();
            protectPrivatePages();
        });
    } else {
        initNavigation();
        protectPrivatePages();
    }
})();

