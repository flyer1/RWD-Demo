(function () {
    'use strict';

    angular
        .module('app.content')
        .controller('ContentController', ContentController);

    ContentController.$inject = ['$stateParams', '$scope', 'datacontext'];

    function ContentController($stateParams, $scope, datacontext) {
        var vm = this;

        var moduleCode = $stateParams.module;
        var subModuleCode = $stateParams.subModule;

        var foundSubModule = datacontext.getNavById(moduleCode, subModuleCode);

        vm.subModule = foundSubModule;
        
        return;
     
    }
})();

