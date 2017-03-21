(function(){
    function registerCtrl($scope,registerSvc,$state){
        
         $scope.user={};
        $scope.register=function(){
            console.log($scope.user);
             $state.go("home",{homeData:$scope.user});
        }
       
        
       
      
        registerSvc.getcountriesFromApi()
        .then(function(res){
            $scope.countries = res.data.countries;
            console.log($scope.countries);
        })
        .catch(function(errorResp){
            $scope.showError = true;
        });
        
    }
       
    
    angular.module("register").controller("registerCtrl",["$scope", "registerSvc" ,"$state",registerCtrl]);
    
})();


