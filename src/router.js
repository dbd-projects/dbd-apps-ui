const express = require('express');
const router = express.Router();

/**
 * Get the home page
 */
router.get('/', (req, res) => {
    console.info("Serving request to ", req.route.methods, req.route.path);
    res.render('main_view');
});

/**
 * Route to the build maker
 */
router.get('/app/builder', (req, res) => {
    console.info("Serving request to ", req.route.methods, req.route.path);
    res.render('builder');
});

/**
 * Router to get pages belonging to the app directory
 */
router.get('/app/*', (req, res) => {
    console.info("Serving request to ", req.route.methods, req.route.path);
    res.render('under_construction');
});

/**
 * Redirect everything else to Not Found
 */
router.get('/*', (req, res) => {
    console.info("Could not find ", req.route.methods, req.route.path);
    res.status(404);
    res.render('not_found');
});

//export this router to use in our index.js
module.exports = router;