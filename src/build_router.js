const express = require('express');
const router = express.Router();

router.use(function reqLog(req, res, next) {
    console.info("Serving request to ", req.route);
    next();
});

/**
 * Route to the build maker
 */
router.get('/app/builder', (req, res) => {
    console.info("Serving request to ", req.route.methods, req.route.path);
    res.render('builder');
});

//export this router to use in our index.js
module.exports = router;