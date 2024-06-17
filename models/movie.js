const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Movie;
