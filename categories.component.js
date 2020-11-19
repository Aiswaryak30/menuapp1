(function(){
    'use strict';

    angular.module('MenuApp')
    .component('menuCategories',{
        templateUrl:'category.template.html',
        bindings:{
            items:'<'
        }
    })
})();