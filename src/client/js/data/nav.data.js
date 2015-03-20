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
                     code: 'your-government',
                     name: 'Your Government',
                     url: '',
                     bannerUrl: 'img/government-header.jpg',
                     children: [],
                     color: 'green'
                 },
                {
                    code: 'business',
                    name: 'Business',
                    url: '',
                    bannerUrl: 'img/business-header.jpg',
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
                    ],
                    color: 'blue',
                },
                 {
                     code: 'residents',
                     name: 'Residents',
                     url: '',
                     bannerUrl: 'img/residents-header-en.jpg',
                     children: [],
                     color: 'yellow',
                 },
                 {
                     code: 'online-services',
                     name: 'Online Services',
                     url: '',
                     bannerUrl: 'img/services-header.jpg',
                     children: [],
                     color: 'orange',
                 },
                 {
                     code: 'visitors',
                     name: 'Visitors',
                     url: '',
                     bannerUrl: '', // Goes to travel manitoba
                     children: [],
                     color: 'green',
                 },
            ];

            return nav;
        }
    }

})();
