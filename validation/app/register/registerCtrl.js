(function () {
    function registerCtrl($scope) {
        
    
        $scope.user = {};
        
        $scope.register = function () {
            console.log($scope.user);
        };
        $scope.reset = function () {
             $scope.user = {};
           
        };
        
       

        
    }
    angular.module("register").controller("registerCtrl",["$scope",registerCtrl]);

})();
