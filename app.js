const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database');
const movieRoutes = require('./routes/movie.js');
const path = require('path')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/movies', movieRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, `views/${req.url}`))
})

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error syncing database:', error);
});