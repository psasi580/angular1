(function () {

    function productCtrl($scope, productSvc) {
     $scope.user={};
        $scope.selecteduser={};
      
        productSvc.getProductsFromApi()
        .then(function(res){
            $scope.countries = res.data.countries;
            console.log($scope.countries);
        })
        .catch(function(errorResp){
            $scope.showError = true;
        });
        $scope.display=function(data){
            console.log(data);
            $scope.selecteduser.country=data.name;
            console.log($scope.selecteduser.country);
            $scope.states=data.states;
            
                }

               $scope.displayCities=function(data1){
                   console.log(data1);
                   $scope.selecteduser.state=data1.name;
                   $scope.cities=data1.cities;
                  
               }

               $scope.getCity=function(data){
                   console.log(data);
                   $scope.selecteduser.city=data.name;
                   $scope.selecteduser.cityCode=data.code;
                   console.log($scope.selecteduser.cityCode);
               }
    }
    angular.module('product')
        .controller("productCtrl", ["$scope", "productSvc", productCtrl])
})();
