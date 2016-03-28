var express = require('express');
var router = express.Router();

// controllers
var layoutController = require('../controllers/layoutController');


//routes
router.get('/', layoutController.index);

router.get('/login', layoutController.index);



router.get('/hi',layoutController.hi);


router.post('/:pankaj',function(req,res){
	
	console.log(req.param('query'));
	res.send({ pankaj : req.params.pankaj , query : req.param('query'),body:req.body});
});




module.exports = router;
