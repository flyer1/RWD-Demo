(function() {
    'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$state', '$timeout', '$window', 'datacontext'];

    function ShellController($state, $timeout, $window, datacontext) {
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

        init();

        return;

        /////////// IMPLEMENTATION /////////////////

        function init() {
            // Not the angular way, but it'll have to do for now
            $("[data-target='mobile-menu']").collapse('hide');
            $('.collapse').collapse();
        }

        function setActiveNavItem(navItem) {
            vm.currNavItem = navItem;
            //console.log('active nav is ' + vm.currNavItem.code);
        }

        function isActiveNavItem(navItem) {
            return vm.currNavItem.code === navItem.code;
        }

        function setActiveSubNavItem(subNavItem) {
            vm.currSubNavItem = subNavItem;

            if (vm.isMenuOpen) {
                toggleMenu();
            }
        }

        function isActiveSubNavItem(subNavItem) {
            return vm.currSubNavItem.code === subNavItem.code;
        }

        function toggleMenu() {
            // Toggle the sub-menu closed first.
            _.forEach(vm.navItems, function(navItem) {
                navItem.isOpen = false;
            });
            vm.isMenuOpen = !vm.isMenuOpen;

            // Hide all of the sub-menus when toggling
            $('.collapse').collapse('hide');
            // Toggle the mobile menu
            $("[data-target='mobile-menu']").collapse('toggle');

            $window.scrollTo(0, 0);

        }

        function toggleSubMenu(navItem) {
            setActiveNavItem(navItem);
            navItem.isOpen = !navItem.isOpen;
            // Toggle the selected sub menu
            $("[data-target='" + navItem.name + "']").collapse('toggle');
        }
    }
})();