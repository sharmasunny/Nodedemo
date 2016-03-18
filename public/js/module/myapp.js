var app =angular.module('myApp', ['ngRoute','ngStorage']);
app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider.
	 when('/login', {
        templateUrl: 'js/views/login.html',
        controller: 'loginController'
    }).
        when('/signUp', {
        templateUrl: 'js/views/signUp.html',
        controller: 'loginController'
    }).
	    when('/viewLogin', {
        templateUrl: 'js/views/viewLogin.html',
        controller: 'viewController'
    }).
      otherwise( {
        redirectTo: '/login' 
      });

      // $locationProvider.html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });
}]);