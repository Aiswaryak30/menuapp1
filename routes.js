(function(){
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('home',{
            url:'/',
            templateUrl:'home.html'
        })
        .state('categories',{
            url:'/categories',
            templateUrl:'template.html',
            controller:'MenuAppController as menu',
            resolve:{
                items:['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('itemDetail',{
            url:'/item-detail/{categoryShortName}',
            templateUrl:'item.html',
            controller:'ItemDetailController as itemdetail',
            resolve:{
                item:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        })

    }
})();