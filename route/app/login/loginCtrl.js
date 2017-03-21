(function(){
    function loginCtrl($scope){
        $scope.user={};
        $scope.loginUser=function(){
            console.log($scope.user);
              
        }
    }
    angular.module("login",[]).controller("loginCtrl",loginCtrl);
    
})();