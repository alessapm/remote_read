const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);

app.use(require('./resources'));
