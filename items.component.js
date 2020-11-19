(function(){
    'use strict';

    angular.module('MenuApp')
    .component('menuItems',{
        templateUrl:'itemdetail.template.html',
        bindings:{
            item:'<'
        }
    })
})();