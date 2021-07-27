const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'dev') {
  dotenv.config({path: 'config/config.env'});
}

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Wise Quotes Generator is Running on port: ${PORT}`.bold.green));