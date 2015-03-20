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
                            code: 'business',
                            name: 'Business',
                            url: 'https://www.gov.mb.ca/business/index.html'
                        },
                        {
                            code: 'starting-a-business',
                            name: 'Starting a Business',
                            url: 'https://www.gov.mb.ca/business/startingsmart/index.html'
                        },
                        {
                            code: 'business-research',
                            name: 'Business Research',
                            url: 'https://www.gov.mb.ca/business/businessresearch/index.html'
                        },
                        {
                            code: 'business-counselling-and-mentoring',
                            name: 'Business Counselling and Mentoring',
                            url: 'https://www.gov.mb.ca/business/counselling/index.html'
                        },
                        {
                            code: 'financing-a-business',
                            name: 'Financing a Business',
                            url: 'https://www.gov.mb.ca/business/financing/index.html'
                        },
                        {
                            code: 'registration-legal-and-icensing',
                            name: 'Registration, Legal and Licensing',
                            url: 'https://www.gov.mb.ca/business/registration/index.html'
                        },
                        {
                            code: 'taxes-and-tax-incentives',
                            name: 'Taxes and Tax Incentives',
                            url: 'https://www.gov.mb.ca/business/taxes/index.html'
                        },
                        {
                            code: 'doing-business-with-government',
                            name: 'Doing Business with Government',
                            url: 'https://www.gov.mb.ca/business/doingbusiness/index.html'
                        },
                        {
                            code: 'conduct-business-online',
                            name: 'Conduct Business Online',
                            url: 'https://www.gov.mb.ca/business/online/index.html'
                        },
                        {
                            code: 'business-development',
                            name: 'Business Development',
                            url: 'https://www.gov.mb.ca/business/businessdevelopment/index.html'
                        },
                        {
                            code: 'human-resources-for-employers',
                            name: 'Human Resources for Employers',
                            url: 'https://www.gov.mb.ca/business/humanresources/index.html'
                        },
                        {
                            code: 'exporting',
                            name: 'Exporting',
                            url: 'https://www.gov.mb.ca/business/exporting/index.html'
                        },
                        {
                            code: 'entrepreneurs',
                            name: 'Entrepreneurs',
                            url: 'https://www.gov.mb.ca/business/entrepreneurs/index.html'
                        },
                        {
                            code: 'investing-in-manitoba',
                            name: 'Investing in Manitoba',
                            url: 'https://www.gov.mb.ca/business/investing/index.html'
                        },
                        {
                            code: 'manufacturing',
                            name: 'Manufacturing',
                            url: 'https://www.gov.mb.ca/business/manufacturing/index.html'
                        },
                        {
                            code: 'operating-a-business',
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
                     color: 'olive-green',
                 },
            ];

            return nav;
        }
    }

})();
