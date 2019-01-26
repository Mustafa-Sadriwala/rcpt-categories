const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getrequest/:param1', bodyParser, (req, res) => {
  var business = req.query.business;

  res.send('You\'re business type: ' + business.toString())
})

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  // eslint-disable-next-line no-console
  console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
