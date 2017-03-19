const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const session = require('express-session');
const bcrypt = require('bcrypt');

app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const markdown = require('marked');
// const toMarkdown = require('to-markdown');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'tacocat salsa',
  resave: false,
  saveUninitialized: true
}));


app.use(require('./resources'));

app.listen(process.env.PORT || 3000);
