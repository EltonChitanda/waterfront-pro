// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPage = link.getAttribute('href');
    if (
        linkPage === currentPage ||
        currentPath.endsWith(linkPage) ||
        (currentPage === '' && linkPage === 'index.html')
    ) {
        link.classList.add('active');
    }
});

// Scroll to top button
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

