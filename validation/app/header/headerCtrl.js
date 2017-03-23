(function () {
    function headerCtrl($scope) {
        //$scope.navItems =["Home","Login","Register"];
        $scope.navItems = [{
                
                name: "Register",
                templateUrl: "app/register/register.html"
        }];
        $scope.brandName = "FlipSnap";
        $scope.headerUrl = "app/header/header.html";
      
        
        $scope.loadPage = function (item) {
            console.log(item);
            $scope.contentUrl=item.templateUrl;
        }
    }


    angular.module("header").controller("headerCtrl", headerCtrl);

})();
