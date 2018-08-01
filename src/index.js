const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./router');

const app = express();

// Set the view template to pug
app.set('view engine', 'pug');
app.set('views','./views');

app.use(cookieParser());
app.use(express.static('public'));

// Set router(s)
app.use('/', router);

// Set port for the server
app.listen(3000);