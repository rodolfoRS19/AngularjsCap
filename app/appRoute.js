/**
 * Created by Rodolfo on 13/03/14.
 */
var myApp = angular.module('entryPointApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/entryState");
    //
    // Now set up the states
    $stateProvider

    $stateProvider
        .state('entryState', {
            url: "/home",
            templateUrl: "index.html"
        })

        .state('state1', {
            url: "/state1",
            templateUrl: "templates/startPoint.html"
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "templates/endPoint.html"
        })
});
