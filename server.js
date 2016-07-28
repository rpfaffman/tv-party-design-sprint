var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.local.config');

var app = new require('express')();
var port = 8080;

var QUEUE = []

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/queue', function(req, res) {
  res.status(200).json(QUEUE);
});

app.delete('/', function(req, res) {
  if (QUEUE.length) {
    QUEUE.shift();
    res.status(200).json(QUEUE);
  } else {
    res.status(500).json({
      error: { message: "Queue is empty." }
    });
  }
});

app.post('/queue/:isrc', function(req, res) {
  QUEUE.push(req.params.isrc);
  res.status(200).json(QUEUE);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌍  Open up http://localhost:%s/ in your browser.', port);
  }
});
