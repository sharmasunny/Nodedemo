 app.controller('loginController',['$scope','$location','loginService','$localStorage', '$sessionStorage', '$window','$http',
 function ($scope,$location,loginService,$localStorage, $sessionStorage, $window,$http) {
$scope.logOut=true; 
$scope.message="helloo";
$scope.clickCreateUser=true;

$scope.error = '';

 $scope.userlogin=function(){
	   //$scope.logOut=false; 
	  //loginService.validUser( $scope.email,$scope.pass);

	$scope.error = '';
 	$http({
	  method: 'POST',
	  url: '/api/login',
	  data: {email:$scope.email, password:$scope.pass},
	}).then(function successCallback(response) {
		if(response.data.error){
			$scope.error = response.data.error;
		}else if(response.data.status==true){
			localStorage.setItem("user",JSON.stringify(response.data.data));
			$location.path('/viewLogin');

		}
	    console.log(response);
	}, function errorCallback(response) {
	    console.log('error',response);
	});
 }

 $scope.creteAccountPage=function(){
 	$location.path('/signUp');
 }

 $scope.signUpUser=function(){
 	$scope.error = '';
	$http({
		method: 'POST',
		url: '/api/signup',
		data: {firstname:$scope.myname,lastname:$scope.mylastName,email:$scope.myemail, password:$scope.mypassword},
	}).then(function successCallback(response) {
		if(response.data.error){
			$scope.error = response.data.error;
		}else{
			$location.path('/viewLogin');
		}
		console.log(response);
	}, function errorCallback(response) {
		console.log('error',response);
	});
}

}]);
  












 //*******************ViewLoginController*******************************

app.controller('viewController',['$scope','loginService','createUser','$localStorage','$http', 
	function ($scope,loginService,createUser,$localStorage,$http) {
  //$scope.data = $localStorage.emailMessage;
   $scope.data = JSON.parse(localStorage.getItem("user"));

$http({
	  method: 'GET',
	  url: '/api/getAllUser'
	}).then(function successCallback(response) {
	    if(response.data){
	    	$scope.users = response.data;
	    }
	}, function errorCallback(response) {
	    console.log('error',response);
	});



	$scope.logOut=true; 
	$scope.logOutUser=function(){
	loginService.logout();	 
	}
	$scope.clickCreateUser=false;
	$scope.contacts=createUser.list();
	    console.log($scope);
	   
	$scope.addUser=function(){
	//createUser.saveData($scope.newContact)
		$scope.clickCreateUser=false;
        //$scope.newContact={};


        $http({
		  method: 'POST',
		  url: '/api/updateUser',
		  data: {email:$scope.email, password:$scope.pass},
		}).then(function successCallback(response) {
			if(response.data.error){
				$scope.error = response.data.error;
			}else if(response.data.status==true){
				localStorage.setItem("user",JSON.stringify(response.data.data));
				$location.path('/viewLogin');

			}
		    console.log(response);
		}, function errorCallback(response) {
		    console.log('error',response);
		});


	}

   $scope.deletName=function(id){
   createUser.deletedata(id);
if($scope.newContact.id == id){
$scope.newContact={};
}
}
$scope.$watch('deletName',function(){
 console.log("inside the delete");
});

 $scope.edit=function(id){
       $scope.newContact= angular.copy(createUser.getData(id));
       	$scope.clickCreateUser=true;
       $scope.user = id;
       console.log($scope.user);
     }	
    }]);


