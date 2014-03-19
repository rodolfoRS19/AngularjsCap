/**
 * Created by Rodolfo on 18/03/14.
 */
'use strict';

angular.module('presentationModule',[])

    .controller('presentationCtrl',['$scope','$http',function($scope,$http){

        $http({
            method:'GET',
            url:'../../testData/basicsFeatures.json'
        })
         .success(function(response){
            $scope.feature = response.data.basicFeatures;
         })

    }]);