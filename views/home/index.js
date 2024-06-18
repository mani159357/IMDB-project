// Fetch and display movies on homepage
document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies-container');
    fetch('http://localhost:3000/api/movies')
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.id = movie.id
                movieCard.innerHTML = `
                <table>
        <tbody id="${movie.id}">
            <tr id="${movie.id}">
                <td class="movietitle" id="${movie.id}">
                <h2>${movie.title}</h2>
                    <img src="${movie.imageUrl}" alt="${movie.title}" id="${movie.id}">
                </td>
                <td class="moviedescription" id="${movie.id}">
                <p>${movie.shortDescription}</p>      
                </td>
            </tr>
        </tbody>
        
    </table>
                    
                   
                `;
                moviesContainer.appendChild(movieCard);
            });
        });
});


//fetch and store the movie etails in local storage
document.querySelector('.movies-container').addEventListener('click', (e) => {
    const movieId = e.target.id;
    console.log(e.target)
    console.log("manikanth", movieId)
    if (movieId) {
        fetch(`http://localhost:3000/api/movies/${movieId}`)
            .then(response => response.json())
            .then(movie => {
                localStorage.setItem('movie', JSON.stringify(movie));
                window.location.href = "/movie/index.html";
            })
            .catch(error => console.error('Error fetching movie:', error));
    }
});
