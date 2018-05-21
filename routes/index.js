var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var software = req.headers["user-agent"].split(/[\(\)]/)[1];
  software = software.trim();
  var ip = req.headers["X-Forwarded-For"]
  || req.headers["x-forwarded-for"]
  || req.client.remoteAddress;
  var language = req.headers["accept-language"].split(",")[1].split(";")[0].trim();
  var obj = { ip: ip, language: language, software: software };
  res.setHeader('Content-Type', 'application/json');
  res.json(obj);
});

module.exports = router;
