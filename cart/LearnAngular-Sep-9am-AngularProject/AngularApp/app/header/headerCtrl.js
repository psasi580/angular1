(function () {
    function headerCtrl($scope) {
        $scope.cartItems = 0;
        
        $scope.navItems = [{
            name:"product",
            templateUrl:"app/product/product.html"
        }];
        $scope.brandName = "FlipSnap";
        $scope.headerUrl = "app/header/header.html";


        $scope.loadPage = function (data) {
            
            $scope.contentUrl = data.templateUrl;
        };

        $scope.$on("ITEM_ADDED", function (evt, args) {
            console.log(args);
            $scope.cartItems++;
        });

        $scope.$on("ITEM_REMOVED", function (evt, args) {
            console.log(args);
            $scope.cartItems--;
        });


    };


    angular.module("header").controller("headerCtrl", headerCtrl);

})();
