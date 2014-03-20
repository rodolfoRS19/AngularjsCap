/**
 * Created by Rodolfo on 18/03/14.
 */
'use strict';

var presentationModule = angular.module('presentationModule',[])

        presentationModule.controller('presentationCtrl',function presentationCtrl($scope,$http){

            $http({
                method:'GET',
                url:'../../app/src/testData/basicsFeatures.json'
            })
             .success(function(response){
                $scope.feature = response.basicFeatures;
                return $scope.feature;
             })

        });

        presentationModule.controller('expressionCtrl',function expressionCtrl($scope){

        });