(function () {
    'use strict';

    angular
        .module('app.data')
        .factory('navData', navData);

    function navData() {

        var service = {
            getNav: getNav,
        };

        return service;


        /************************** IMPLEMENTATION ********************************/
        function getNav() {
            var nav = [
                 {
                     name: 'Your Government',
                     url: '',
                     children: []
                 },
                {
                    name: 'Business',
                    url: '',
                    children: [
                        {
                            name: 'Business',
                            url: 'https://www.gov.mb.ca/business/index.html'
                        },
                        {
                            name: 'Starting a Business',
                            url: 'https://www.gov.mb.ca/business/startingsmart/index.html'
                        },
                        {
                            name: 'Business Research',
                            url: 'https://www.gov.mb.ca/business/businessresearch/index.html'
                        },
                        {
                            name: 'Business Counselling and Mentoring',
                            url: 'https://www.gov.mb.ca/business/counselling/index.html'
                        },
                        {
                            name: 'Financing a Business',
                            url: 'https://www.gov.mb.ca/business/financing/index.html'
                        },
                        {
                            name: 'Registration, Legal and Licensing',
                            url: 'https://www.gov.mb.ca/business/registration/index.html'
                        },
                        {
                            name: 'Taxes and Tax Incentives',
                            url: 'https://www.gov.mb.ca/business/taxes/index.html'
                        },
                        {
                            name: 'Doing Business with Government',
                            url: 'https://www.gov.mb.ca/business/doingbusiness/index.html'
                        },
                        {
                            name: 'Conduct Business Online',
                            url: 'https://www.gov.mb.ca/business/online/index.html'
                        },
                        {
                            name: 'Business Development',
                            url: 'https://www.gov.mb.ca/business/businessdevelopment/index.html'
                        },
                        {
                            name: 'Human Resources for Employers',
                            url: 'https://www.gov.mb.ca/business/humanresources/index.html'
                        },
                        {
                            name: 'Exporting',
                            url: 'https://www.gov.mb.ca/business/exporting/index.html'
                        },
                        {
                            name: 'Entrepreneurs',
                            url: 'https://www.gov.mb.ca/business/entrepreneurs/index.html'
                        },
                        {
                            name: 'Investing in Manitoba',
                            url: 'https://www.gov.mb.ca/business/investing/index.html'
                        },
                        {
                            name: 'Manufacturing',
                            url: 'https://www.gov.mb.ca/business/manufacturing/index.html'
                        },
                        {
                            name: 'Operating a Business',
                            url: 'https://www.gov.mb.ca/business/operating/index.html'
                        },
                    ]
                },
                 {
                     name: 'Residents',
                     url: '',
                     children: []
                 },
                 {
                     name: 'Online Services',
                     url: '',
                     children: []
                 },
                 {
                     name: 'Visitors',
                     url: '',
                     children: []
                 },
            ];

            return nav;
        }
    }

})();
