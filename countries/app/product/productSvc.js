(
    function () {
        function productSvc($q,$http) {
         
            this.getProductsFromApi=function(){
                var dfd= $q.defer();
                $http.get("api/countries.json")
                .then(function(res){
                    
                    dfd.resolve(res);
                })
                .catch(function(err){
                    dfd.reject(err);
                });
                
                return dfd.promise;
            };
        }
        angular.module("product")
            .service("productSvc",
                     ["$q","$http",productSvc]);

    })();
