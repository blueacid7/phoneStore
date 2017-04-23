'use strict';

angular.
module('phonecatApp').
config([ '$routeProvider','$locationProvider',
    function config( $routeProvider,$locationProvider1) {
        $locationProvider1.hashPrefix('!');

        $routeProvider.
        when('/phones', {
            template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneID', {
            template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
]);
