require('dotenv').config();
const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const path = require("path");
const bodyParser = require("body-parser");
const passport = require('passport');
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 8000;


// Import Router and Config
const keys = require("./config/keys");
const { allowedOrigin } = keys.app;
const app = express();
const api = require('./routes')

// Connect to Database
const db = mongoose.connection;
mongoose.connect(keys.db.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
	console.log("Connection to the database has established");
});


// Configuration
require('./config/passport');
app.use(passport.initialize());
app.use(express.static('uploads'))
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// Model and Route
app.use(api)

// Make public directory accessible on the browser
app.use(express.static(__dirname+'/public'));
app.get('*', (req, res) => res.status(404).json('No API route found'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
});

app.listen(PORT, () => {
	console.log(`listening to port ${PORT}`);
});
