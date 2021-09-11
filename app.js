'use strict';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var subjectRouter = require('./routes/subjects');
var adminRouter = require('./routes/admin');
var unitRouter = require('./routes/unit');
var questionRouter = require('./routes/questions');

var Subject = require('./models/subject');
var Unit = require('./models/unit');
var Question = require('./models/question');
var Answer = require('./models/answer');

Subject.sync().then(() => {
  Unit.belongsTo(Subject, {foregnKey: 'sbjectId'});
  Unit.sync().then(() => {
    Question.belongsTo(Unit, {foregnKey: 'unitId'});
    Question.sync().then(() => {
      Answer.belongsTo(Question, {foregnKey: 'questionId'});
      Answer.sync();
    });
  });
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/subjects',subjectRouter);
app.use('/admin', adminRouter);
app.use('/units', unitRouter);
app.use('/questions',questionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
