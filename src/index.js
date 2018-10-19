const express = require('express');
const cookieParser = require('cookie-parser');

const buildRouter = require('./build_router');
const app = express();

const port = 3000;

// Set the view template to pug
app.set('view engine', 'pug');
app.set('views','./views');

app.use(cookieParser());
app.use(express.static('public'));

// Set router(s)
app.use('/app/builder', buildRouter);
/*app.get('/app/*', (req, res) => {
    console.info("Serving request to ", req.route.methods, req.route.path);
    res.render('under_construction');
});*/
app.get('/', (req, res) => {
    console.info("Serving request to ", req.route.methods, req.route.path);
    res.render('main_view');
});

// Set port for the server
app.listen(port, () => console.info('dbd-apps-ui running on port: ', port));