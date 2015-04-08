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
        vm.isMenuOpen = false;

        vm.isActiveNavItem = isActiveNavItem;
        vm.isActiveSubNavItem = isActiveSubNavItem;
        vm.setActiveNavItem = setActiveNavItem;
        vm.setActiveSubNavItem = setActiveSubNavItem;
        vm.toggleMenu = toggleMenu;
        vm.toggleSubMenu = toggleSubMenu;

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

        function toggleMenu() {
          // TODO: Toggle the sub-menu closed first.
          vm.isMenuOpen = !vm.isMenuOpen;
        }

        function toggleSubMenu(subMenuItem) {
          subMenuItem.isOpen = !subMenuItem.isOpen;
        }
    }
})();
