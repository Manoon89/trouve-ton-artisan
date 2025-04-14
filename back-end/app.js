const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config(); 
const cors = require ('cors') ;
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const indexRouter = require('./src/routes/index');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Artisan Directory',
        version: '1.0.0',
        description: 'Documentation de l\'API des artisans'
      }
    },
    apis: ['./src/routes/*.js', './src/controllers/*.js'], 
  };

const specs = swaggerJsdoc(options);

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
