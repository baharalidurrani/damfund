const express = require('express');
const Router = express.Router();
// const Home = require('../Controllers/HomeController');

//Home route
Router.get('/', (req, res) => {
    res.send("hello...");
});

//////////////////not found
Router.all('*', function (req, res) {
    res.send('NotFound');
});

module.exports = Router;