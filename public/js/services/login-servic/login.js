app.service('loginService',function($location,$localStorage, $window){
this.logout=function(){
 $location.path('/login');
}

	
var adduserInfo=[{
		id: 0,
		name: 'John',
		lastName: 'baba',
		email: 'admin@gmail.com',
		password:'welcome123'
	}];
this.Savedata = function (myname,mylastName,myemail,mypassword) {
adduserInfo.push({name:myname,lastName:mylastName,email:myemail,password:mypassword});
for(i in adduserInfo){
                $localStorage.emailMessage = adduserInfo[i].email;
                 $localStorage.passwordMessage =adduserInfo[i].password;
               console.log($localStorage.emailMessage);
                 console.log($localStorage.passwordMessage);
      }
      
 $window.alert($localStorage.emailMessage + "\n" + $localStorage.passwordMessage);
    
           }
 $localStorage.storeData=adduserInfo;
this.validUser=function(email,pass){
var validEntry=false
for(i in $localStorage.storeData){
if($localStorage.storeData[i].email== email && $localStorage.storeData[i].password== pass){	
	     validEntry= true;
         return $location.path('/viewLogin');
			}
			
	}
	if(validEntry == false){
       alert("not valid user");
	}
}
		
});
	
	
	
	
