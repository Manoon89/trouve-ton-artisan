const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config(); 
const cors = require ('cors') ;

const indexRouter = require('./src/routes/index');

const app = express();

app.use(cors({
    origin: 'http://localhost:5174',  // Permet les requêtes de ce domaine
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permet certains types de requêtes
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

module.exports = app;
