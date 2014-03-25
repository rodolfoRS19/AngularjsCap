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
                expressionUrl:  "../../app/src/templates/ejemplos/expression/expression.html"
            };

            $scope.onChangeExpressionContent = function(argIdContent){
                $scope.ExpressionSwitchValue = null;
                if(argIdContent == "index.html"){
                    $scope.ExpressionSwitchValue = "index.html";
                    $scope.loadExpressionIndex();
                }

                if(argIdContent = "app.js"){

                }
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

            $scope.loadExpression

        }]);