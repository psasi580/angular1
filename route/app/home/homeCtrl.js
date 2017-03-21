(function(){
    function homeCtrl($scope,$state){
       // console.log($state);
        $scope.result=$state;
        console.log($scope.result);
        
    }
    angular.module("home").controller("homeCtrl",homeCtrl);
})();