var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var imageRouter = require('./routes/image');
var postsRouter = require('./routes/posts');
var usersRouter = require('./routes/users');

var app = express();

require('dotenv').config();
require('./connections');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/image', imageRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

module.exports = app;
