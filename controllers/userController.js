
//model
var Usermodel = require('../models/usermodel');

// sunny@sign up user
module.exports.signup =  function(req, res) {

    var user = new Usermodel();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = req.body.password;
    


    Usermodel.findOne({email:req.body.email},function(err,person){
    	if(err){
    		console.log('err',err)
    	}else {
    		if(!person){
			    user.save(function (err, data) {
					if (err) {
						res.send(err);
					}else {
						res.send(data);
					}
				});
			}else{
				res.send({error:'Email is already register'});
			}
		}
	});
} 




module.exports.login =function(req,res){

	var email = req.body.email;
	var password = req.body.password;
	 
	Usermodel.findOne({email:email},function(err,person){
    	if(err){
    		console.log('err',err)
    	}else {
    		if(person){
    			if(person.password==password){
    				res.send({status:true,data:person});
    			}else{
    				res.send({error:'Incorrect Password'});
    			}
    		}else{
    			res.send({error:'Email is not Register'});
    		}
    	}
    });
}


// sunny@Get All users
module.exports.getAllUser = function(req,res){

	Usermodel.find({},function(err,users){
		if(err){
			res.send(err);
		}else{
			res.send(users);
		}
	});
}