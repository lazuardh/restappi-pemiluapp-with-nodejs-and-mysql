var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var authCandidat = require('./routes/candidatRoutes');
var authVotes = require('./routes/votingRoutes');
var dptRoutes = require('./routes/dptRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/candidat', authCandidat);
app.use('/voting', authVotes);
app.use('/dpt', dptRoutes);

module.exports = app;
