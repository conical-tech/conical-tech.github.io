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