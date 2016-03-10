// callback


function abc(arg1, callback ){
  if(!arg1){
  	callback('error arg not null',null);
  }else {
  	callback(null,'hello '+arg1);
  }
};

abc('hello',function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log(data);
	}
});




// file path
var path = require("path");

console.log("file path "+__filename);

console.log(`file path ${__filename}`);


console.log(`dir path ${__dirname}`);


console.log(`file name ${path.basename(__filename)}`);


console.log(`process  ${process.argv}`);


process.stdout.write(`\n\n hello world \n\n`);



process.stdin.on('data', function(data) {
	process.stdout.write(`\n\n hellwoo ${data} \n\n`);
});

