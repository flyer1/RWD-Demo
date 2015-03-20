// This file retrieves the data objects from the data folder and then adds on computed properties onto the object. 
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('datacontext', datacontext);

    datacontext.$inject = ['$http', 'navData'];

    function datacontext($http, navData) {

        var siteRepository = null;

        var service = {
            getSiteRepository: getSiteRepository,
            getNavById: getNavById,
            getHtmlContent: getHtmlContent
        };

        return service;

        /************************* IMPLEMENTATION ******************************/

        // Return the entire data repository for the entire site. 
        function getSiteRepository() {

            if (siteRepository !== null) {
                // If the site repo has already been generated, then return the stored value.
                return siteRepository;
            }

            // Get the site and school data
            var navItems = navData.getNav();

            //addComputes(nav);

            siteRepository = {
                navItems: navItems,
            };

            return siteRepository;
        }

        // Add some computed properties onto the site object
        function addComputes(nav) {
            _.forEach(nav, function (item) {
            });
        }

        function getNavById(moduleName, subModuleName) {

            var foundModule = _.findWhere(siteRepository.navItems, { code: moduleName });
            var foundSubModule = null;

            if (foundModule) {
                foundSubModule = _.findWhere(foundModule.children, { code: subModuleName });
                return foundSubModule;
            }
            else {
                return null;
            }
        }

        function getHtmlContent(url) {


            $http.get(url)
                    .success(function (data, status, headers, config) {
                        debugger;
                        "content-first-section"

                    })
                    .error(function (data, status, headers, config) {
                    });
        }
    }
})();
