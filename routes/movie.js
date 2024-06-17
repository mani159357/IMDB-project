const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie')

// Get all movies
router.get('/', movieController.getMovies);

// Get movie by ID
router.get('/:id', movieController.getDescription);

module.exports = router;
