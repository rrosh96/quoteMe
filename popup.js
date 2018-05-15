//Module 
var angularApp = angular.module('angularApp', []);

//Controllers
angularApp.controller('mainController', ['$scope' ,'$http', function($scope, $http){

    // var APIURL = "https://talaikis.com/api/quotes/random/"
    var APIURL = 'http://localhost:8080'

    $scope.txt = 'Marvel Cinematic Universe-Loading';
    $scope.author = ''

    // $http.get(APIURL, function(response){
    //     console.log(response);
    //     // $scope.txt = response.toString();
    // }, function(err){
    //     console.info(err);
    // })
    $http.get(APIURL)
    .then(function(response){
        console.log(response);
        $scope.txt = response.data.quote;
        $scope.author = response.data.author;
    })
    .catch(function(err){
        console.log(err);
    })
}])