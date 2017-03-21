(function () {

    function productCtrl($scope, productSvc) {
      /*  productSvc.counter()
            .then(function (response) {
            $scope.counter = response;
        }).catch(function(response){
            $scope.counter = response;
        });
        $scope.productList = productSvc.getProducts();*/
        productSvc.getProductsFromApi()
        .then(function(res){
            $scope.products = res.data.Data.SearchProductsDetails;
            console.log($scope.products)
        })
        .catch(function(errorResp){
            $scope.showError = true;
        });
    }
    angular.module('product')
        .controller("productCtrl", ["$scope", "productSvc", productCtrl])
})();
