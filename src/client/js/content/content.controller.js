(function () {
    'use strict';

    angular
        .module('app.content')
        .controller('ContentController', ContentController);

    ContentController.$inject = ['$stateParams', 'datacontext'];

    function ContentController($stateParams, datacontext) {
        var vm = this;

        var moduleCode = $stateParams.module;
        var subModuleCode = $stateParams.subModule;

        var foundSubModule = datacontext.getNavById(moduleCode, subModuleCode);

        vm.subModule = foundSubModule;
        
        if (vm.subModule) {
            //datacontext.getHtmlContent(vm.subModule.url);
        }

        return;
     
    }
})();

