(function(){
   var app= angular.module("goods",["header","register","home","login" ,"ui.router"]);
    
    app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
        
         var loginObj={
             nmae:"login",
             url:"/login",
             templateUrl:"app/login/login.html"
             
         };
             
        var registerObj={
            name:"register",
            url:"/register",
            templateUrl:"app/register/register.html"
            
        };
        
         var homeObj={
            name:"home",
            url:"/home",
            templateUrl:"app/home/home.html",
           // params:{ homeData:" "}
            
        
        };
         
         
         $stateProvider.state("login",loginObj)
         $stateProvider.state("register",registerObj)
        $stateProvider.state("home",homeObj)
         
        });
})();