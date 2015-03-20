(function () {
    'use strict';

    angular.module('app.core')
        .config(configure);

    configure.$inject = ['$httpProvider'];

    function configure($httpProvider) {

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        return;

    }
})();