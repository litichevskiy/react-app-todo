const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const compression = require('compression');
const sslRedirect = require('heroku-ssl-redirect');
const app = express();

app.use(compression({filter: shouldCompress}));
app.use(sslRedirect(['other','development','production']));

app.use('/images', express.static(__dirname + '/src/images'));
app.use('/css', express.static(__dirname + '/dist/css'));
app.use('/js', express.static(__dirname + '/dist/js'));
app.use('/data', express.static(__dirname + '/src/js'));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/sw.js', express.static( __dirname + '/dist/js/sw.js', {
  setHeaders: function(res, path) {
    res.set('Cache-Control','max-age=0, no-cache, no-store, must-revalidate');
  }
}));
app.use('/manifest.json', express.static(__dirname + '/manifest.json'));

function shouldCompress ( req, res ) {
  if (req.headers['x-no-compression']) return false;
  else return compression.filter( req, res );
};

app.listen( PORT, () => console.log(`server listening on port ${PORT}`));