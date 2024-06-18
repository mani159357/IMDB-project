const Movie = require('../models/movie');

const getMovies = async (req, res, next) => {
    const movies = await Movie.findAll();
    console.log(movies)
    res.json(movies);
}

const getDescription = async (req, res, next) => {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
}

module.exports = {
    getMovies,
    getDescription
}