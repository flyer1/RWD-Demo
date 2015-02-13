(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('datacontext', datacontext);

    datacontext.$inject = ['siteData', 'schoolData'];

    function datacontext(siteData, schoolData) {

        var service = {
            getSiteRepository: getSiteRepository
        };

        return service;

        /************************* IMPLEMENTATION ******************************/

        // Return the entire data repository for the entire site. Because the data structure is so small (and future growth is not expected to ever change that to a big enough degree), the entire block of data can be returned to the client in one data structure.
        function getSiteRepository() {

            // Get the site and school data
            var sites = siteData.getSites();
            var schools = schoolData.getSchools();

            // Add the relationship "table" between sites and schools. Useful to generate counts of sites for a given schools for eg, or when filtering the sites via a set of schools.
            // Basically flatten the relationship between sites and the schools they service.
            var siteSchools = getSiteSchools(sites);

            // Then add on computed properties for each site
            addSiteComputes(sites);

            // Then add on computed properties for each school
            addSchoolComputes(schools, siteSchools);

            return {
                sites: sites,
                schools: schools,
                siteSchools: siteSchools
            };
        }

        // Add some computed properties onto the site object
        function addSiteComputes(sites) {
            _.forEach(sites, function (site) {
                site.address.addressLine1 = (site.address.unitNumber ? site.address.unitNumber + '-' : '') + site.address.number + ' ' + site.address.street;
                site.address.addressLine2 = site.address.city + ', ' + site.address.province + ' ' + site.address.postalCode;

                // Google maps API for a static map with marker
                var baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
                var address = site.address.number + '+' + site.address.street + ',' + site.address.city + ',' + site.address.province + ',' + site.address.postalCode;
                var marker = '&markers=color:' + site.address.markerColor + '%7Clabel:' + site.shortName + '%7C' + site.address.lat + ' ,' + site.address.lng;
                var args = '?center=' + address + '&zoom=14&size=450x250&maptype=roadmap' + marker;

                site.address.staticMapSrc = baseUrl + args;

                site.schoolCodes = _.pluck(site.schools, 'code').join();
            });
        }
        
        function addSchoolComputes(schools, siteSchools) {
            _.forEach(schools, function (school) {
                // For each school, add a count of how many sites service it
                school.siteCount = _.where(siteSchools, { 'schoolCode': school.code }).length;
            });
        }

        function getSiteSchools(sites) {
            var siteSchools = [];

            _.forEach(sites, function (site) {
                _.forEach(site.schools, function (school) {
                    var newItem = {
                        siteCode: site.code,
                        schoolCode: school.code
                    };
                    siteSchools.push(newItem);
                });
            });

            return siteSchools;
        }

        function addSchool(newSite, school, transportType) {
            var newSchool = $.extend({}, school, {
                transportType: transportType
            });
            newSite.schools.push(newSchool);
        };

        function getSchoolGroups() {

            var schoolAry = [];
            var sites = getSites();

            // Flatten the list of all schools in the site repository (there will be duplicates)
            var allSchools = _.chain(sites)
              .map(function (site) {
                  return site.schools;
              })
              .reduce(function (memo, ary) {
                  return memo.concat(ary);
              })
              .value();

            // Now count the duplicates and create 1 school object per unique instance and add properties.
            var schoolAry = _.chain(allSchools)
              .groupBy('name')
              .map(function (grouping) {
                  var index = grouping[0];
                  return {
                      name: index.name,
                      lat: index.lat,
                      lng: index.lng,
                      transportType: index.transportType,
                      count: grouping.length,
                      isChecked: false,
                  };
              })
              .value();

            return schoolAry;
        };
    }
})();

//var refData = {
//    getSchools: function () {
//        return $.Deferred(function (def) {
//            var schoolAry = [];

//            for (var property in schools) {
//                if (schools.hasOwnProperty(property)) {
//                    schoolAry.push(schools[property]);
//                }
//            }

//            def.resolve(schoolAry);
//        });
//    }
//};