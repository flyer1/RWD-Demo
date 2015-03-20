(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$state', 'datacontext'];

    function ShellController($state, datacontext) {
        var vm = this;
        var siteRepo = datacontext.getSiteRepository();
        vm.navItems = siteRepo.navItems;
        vm.currNavItem = 'business';
        vm.setActive = setActive;
        vm.isActive = isActive;

        return;

        /////////// IMPLEMENTATION /////////////////
        function setActive(navItem) {
            vm.currNavItem = navItem;
            console.log('active nav is ' + vm.currNavItem);
        }

        function isActive(navItem) {
            return vm.currNavItem.code === navItem.code;
        }
    }
})();