(
    function () {
        function registerSvc($q,$http) {
         
            this.getcountriesFromApi=function(){
                var dfd= $q.defer();
                $http.get("app/api/countries.json")
                .then(function(res){
                    
                    dfd.resolve(res);
                })
                .catch(function(err){
                    dfd.reject(err);
                });
                
                return dfd.promise;
            };
        }
        angular.module("register").service("registerSvc", ["$q","$http",registerSvc]);

    })();
