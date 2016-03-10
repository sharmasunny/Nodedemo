var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/signup', function(req, res, next) {
  console.log(req.body);
  res.send(req.body);
});


router.get('/abc', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/xyz', function(req, res, next) {
  res.render('c', { name: 'mangal' });
});

module.exports = router;
