const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');
const app = express();
const path = require("path")

// open up CORS 
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

// serving front end build folder
app.use(express.static(path.join(__dirname + "/../client/build/")));

// You can place your routes here, feel free to refactor:
const { singlePost, authentication, mainFilters, map, postStatus, userSpecific, categoryList } = require('./routes');
app.use(singlePost);
app.use(authentication);
app.use(mainFilters);
app.use(map);
app.use(postStatus);
app.use(userSpecific);
app.use(categoryList);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../client/build/index.html"))
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});

module.exports = app;
