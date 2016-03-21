var express = require('express');
var router = express.Router();



// controllers

var userController = require('../controllers/userController');



// routes 

router.post('/signup',userController.signup);

router.post('/login',userController.login);

router.get('/getAllUser',userController.getAllUser);

//router.post('',)


module.exports = router;