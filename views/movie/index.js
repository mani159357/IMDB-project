

// // Fetch and display movie details on detail page
// document.addEventListener('DOMContentLoaded', () => {
//     const params = new URLSearchParams(window.location.search);
//     const movieId = params.get('id');
//     if (movieId) {
//         fetch(`http://localhost:3000/api/movies/${movieId}`)
//             .then(response => response.json())
//             .then(movie => {
//                 document.getElementById('movie-title').textContent = movie.title;
//                 document.getElementById('movie-image').src = movie.imageUrl;
//                 document.getElementById('movie-description').textContent = movie.longDescription;
//             });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const movie = JSON.parse(localStorage.getItem('movie'));
    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;
        // document.getElementById('movie-image').src = movie.imageUrl;
        document.getElementById('movie-description').textContent = movie.longDescription;
    }
});

