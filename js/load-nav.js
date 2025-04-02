// Load the navigation bar from nav.html into the #navbar div
fetch('/components/nav.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load navigation bar');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Error loading navigation:', error));

// Highlight active link on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // Adjust for navbar height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});