(function(){
    'use strict';

    angular.module('data')
    .service('MenuDataService',MenuDataService);

    MenuDataService.$inject=['$http'];
    function MenuDataService($http){
        var service=this;
        var found=[];
        service.getAllCategories=function(){
        
            return $http({
                method:'GET',
                url: "https://davids-restaurant.herokuapp.com/categories.json"
           
            })
            .then(function(response){
            var result=response.data;
           
             return result;
            })
            .catch(function(error){
              console.log(error)
            })
            
        }
    service.getItemsForCategory=function(categoryShortName){
        found=[];
        return $http({
            method:'GET',
            url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="
        })
        .then(function(response){
            var result=response.data.menu_items;
           
            categoryShortName=categoryShortName.charAt(0).toUpperCase();
            for(var i=0;i<result.length;i++){
              if(result[i].short_name.match(categoryShortName)){
                found.push(result[i]);
              }   
            }
             return found;
            })
            .catch(function(error){
              console.log(error)
            })
    }
 
    }
})();