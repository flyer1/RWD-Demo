(function() {
    'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$state', 'datacontext'];

    function ShellController($state, datacontext) {
        var vm = this;
        var siteRepo = datacontext.getSiteRepository();
        vm.navItems = siteRepo.navItems;
        vm.currNavItem = vm.navItems[1];
        vm.currSubNavItem = vm.currNavItem.children[0];
        vm.isActiveNavItem = isActiveNavItem;
        vm.isActiveSubNavItem = isActiveSubNavItem;
        vm.setActiveNavItem = setActiveNavItem;
        vm.setActiveSubNavItem = setActiveSubNavItem;
        console.log(vm.currNavItem);
        return;

        /////////// IMPLEMENTATION /////////////////

        function setActiveNavItem(navItem) {
            vm.currNavItem = navItem;
            //console.log('active nav is ' + vm.currNavItem.code);
        }

        function isActiveNavItem(navItem) {
            return vm.currNavItem.code === navItem.code;
        }

        function setActiveSubNavItem(subNavItem) {
            vm.currSubNavItem = subNavItem;
            //console.log('active sub nav is ' + vm.currSubNavItem.code);
        }

        function isActiveSubNavItem(subNavItem) {
            return vm.currSubNavItem.code === subNavItem.code;
        }
    }
})();
