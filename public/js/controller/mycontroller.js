 app.controller('loginController',['$scope','$location','loginService','$localStorage', '$sessionStorage', '$window','$http',
 function ($scope,$location,loginService,$localStorage, $sessionStorage, $window,$http) {
$scope.logOut=true; 
$scope.message="helloo";
	$scope.clickCreateUser=true;
 $scope.userData=function(){
	   $scope.logOut=false; 
	  loginService.validUser( $scope.email,$scope.pass);
	 
 }
 $scope.creteAccountPage=function(){
 $location.path('/signUp');
 	
 }
 $scope.signUpUser=function(){
 	   $http({
		  method: 'POST',
		  url: '/signup',
		  data: {name:$scope.myname,lastname:$scope.mylastName,email:$scope.myemail, password:$scope.mypassword},
		}).then(function successCallback(response) {
		    console.log(response);
		}, function errorCallback(response) {
		    console.log('error',response);
		  });

 	  //$scope.clickCreateUser=true;
          loginService.Savedata($scope.myname,$scope.mylastName,$scope.myemail, $scope.mypassword)
    	 $window.alert("signUp Succefully  \n Plz Log in");
             $location.path('/login');

 }
 
  }]);
  
 //*******************ViewLoginController*******************************

app.controller('viewController',['$scope','loginService','createUser','$localStorage', 
	function ($scope,loginService,createUser,$localStorage) {
  $scope.data = $localStorage.emailMessage;
  
 console.log($scope.data);
	$scope.logOut=true; 
	$scope.logOutUser=function(){
	loginService.logout();	 
	}
	$scope.clickCreateUser=false;
	$scope.contacts=createUser.list();
	    console.log($scope);
	   
	$scope.addUser=function(){
	createUser.saveData($scope.newContact)
	$scope.clickCreateUser=false;
        $scope.newContact={};

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
     }	
    }]);


