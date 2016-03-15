var express = require('express');
var router = express.Router();

var Usermodel = require('../models/usermodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/signup', function(req, res, next) {
	console.log(req.body);

    var user = new Usermodel();

    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = req.body.password;
    

    user.save(function (err, data) {
		if (err) {
			console.log(err);
			res.send(err);
		}else {
			console.log('Saved : ', data );
			res.send(data);
		}
	});
});


router.get('/abc', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/xyz', function(req, res, next) {
  res.render('c', { name: 'mangal' });
});

module.exports = router;
