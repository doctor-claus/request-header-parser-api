var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/browserinfo', function(req, res, next) {
  var software = req.headers["user-agent"].split(/[\(\)]/)[1];
  software = software.trim();
  var ip = req.headers["X-Forwarded-For"]
  || req.headers["x-forwarded-for"]
  || req.client.remoteAddress;
  var language = req.headers["accept-language"].split(",")[0]
  var obj = { ip: ip, language: language, software: software };
  res.setHeader('Content-Type', 'application/json');
  res.send(obj);
});

module.exports = router;
