const express = require('express');
const router = express.Router();

/**
 * Router to get pages belonging to the app directory
 */
router.get('/app/*', (req, res) => {
    res.render('under_construction');
});

/**
 * Get the home page
 */
router.get('/', (req, res) => {
    res.render('main_view');
});

/**
 * Get the home page
 */
router.get('/home', (req, res) => {
    res.render('main_view');
});

/**
 * Redirect everything else to Not Found
 */
router.get('/*', (req, res) => {
    res.status(404);
    res.render('not_found');
});

//export this router to use in our index.js
module.exports = router;