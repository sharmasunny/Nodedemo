var express = require('express');
var router = express.Router();

// controllers
var layoutController = require('../controllers/layoutController');


//routes
router.get('/', layoutController.index);



module.exports = router;
