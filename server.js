var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('body-parser');
var config = require('./webpack.local.config');

var app = new require('express')();
var port = process.env.PORT || 8080;

var QUEUE = [];

var compiler = webpack(config);

/* MIDDLEWARE */
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('express').static('assets'));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());

/* ENABLE CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/queue', function(req, res) {
  res.status(200).json(QUEUE);
});

app.post('/api/queue', function(req, res) {
  QUEUE.push(req.body);
  res.status(200).json(QUEUE);
});

app.post('/api/queue/pop', function(req, res) {
  if (QUEUE.length) {
    res.status(200).json(QUEUE.shift());
  } else {
    res.status(500).json(QUEUE);
  }
});

app.delete('/api/queue/reset', function(req, res) {
  QUEUE = [];
  res.status(200).json(QUEUE)
})

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌍  Open up http://localhost:%s/ in your browser.', port);
  }
});
