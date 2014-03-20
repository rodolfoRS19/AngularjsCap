/**
 * Created by Rodolfo on 13/03/14.
 */
var myApp = angular.module('entryPointApp',['ui.router','presentationModule']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('presentacion', {
            url: "/presentacion",
            templateUrl: "templates/presentacion.html",
            controller:'presentationCtrl'
        })
        .state('examples', {
            url: "/examples",
            templateUrl: "templates/ejemplos.html"
        })

        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html"
        })
});
