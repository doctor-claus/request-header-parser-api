var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var software = req.headers["user-agent"].split(/[\(\)]/)[1];
  software = software.trim();
  var ip = req.headers["X-Forwarded-For"]
  || req.headers["x-forwarded-for"]
  || req.client.remoteAddress;
  res.setHeader('Content-Type', 'text/plain');
  res.send(ip);
});

module.exports = router;
