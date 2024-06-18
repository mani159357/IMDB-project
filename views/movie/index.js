// Fetch and display movie details on detail page from local storage
document.addEventListener('DOMContentLoaded', () => {
    const movie = JSON.parse(localStorage.getItem('movie'));
    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-description').textContent = movie.longDescription;
    }
});

