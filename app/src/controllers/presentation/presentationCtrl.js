/**
 * Created by Rodolfo on 18/03/14.
 */
'use strict';

  angular.module('presentationModule',['appServiceModule'])

        .controller('presentationCtrl',['$scope','$http',function($scope,$http){

            $http({
                method:'GET',
                url:'../../app/src/testData/basicsFeatures.json'
            })
             .success(function(response){
                $scope.feature = response.basicFeatures;
                return $scope.feature;
             })
        }])

        .controller('expressionCtrl',['$scope','$http','formatStringFactory',function($scope,$http,formatStringFactory){

            $scope.templates = {
                expressionUrl:  "../../app/src/templates/ejemplos/expression/expression.html",
                indexExample: "../../app/src/templates/ejemplos/expression/expressionExample.html"
            };

            $scope.loadExpressionIndex = function(){

                $http({
                    method:'GET',
                    url:'../../app/src/testData/ExampleText/expression/index.txt'
                })
                    .success(function(response){
                        $scope.indexData= formatStringFactory.doLinesText(response);
                        return $scope.indexData;
                    })
            };

          $scope.loadExpressionIndex();

        }])

        .controller('dataBindingCtrl',['$scope','$http','$window','$rootScope','formatStringFactory',
          function($scope,$http,$window,$rootScope,formatStringFactory){

          $scope.src = '../../app/resources/images/Two_Way_Data_Binding.jpg';

          $scope.templates = {
            dataBindingUrl:"../../app/src/templates/ejemplos/dataBinding/dataBinding.html",
              indexExample:"../../app/src/templates/ejemplos/dataBinding/indexExample.html"
          };

      }])