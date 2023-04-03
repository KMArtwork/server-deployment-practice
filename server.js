'use strict'

const express = require('express');
const sarcasticText = require('./sarcasmtext/sarcasm');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/sarcasm', (request, response, next) => {
  if(request.query.message) {
    response.send(sarcasticText(request.query.message))
  } else {
    response.send('Must supply a message parameter to the query')
  }
})

module.exports = app;