/**
 * Created by Rodolfo on 18/03/14.
 */
'use strict';

var presentationModule = angular.module('presentationModule',[])

        presentationModule.controller('presentationCtrl',function presentationCtrl($scope,$http){


            $scope.templates = {
                expressionUrl:  "../../app/src/templates/ejemplos/expression/expression.html"
            };

            $http({
                method:'GET',
                url:'../../app/src/testData/basicsFeatures.json'
            })
             .success(function(response){
                $scope.feature = response.basicFeatures;
                return $scope.feature;
             })


            $scope.onChangeExpressionContent = function(argIdContent){
                $scope.ExpressionSwitchValue = null;
                if(argIdContent == "index.html"){
                    $scope.ExpressionSwitchValue = "index.html";
                    $scope.loadExpressionIndex();
                }
            };

            $scope.loadExpressionIndex = function(){
                $scope.indexData = {
                    line: null
                }

                $http({
                    method:'GET',
                    url:'../../app/src/testData/ExampleText/expression/index.txt'
                })
                    .success(function(response){
                        $scope.indexData.line = $scope.splitTextLine(response);
                        debugger;
                        return $scope.indexData;
                    })
            }

            $scope.splitTextLine = function(argText){
                var lines;
                for(var i = 0; i< argText.length; i++){
                    lines = argText.split("\n");
                }
                return lines;
            }
        });

        presentationModule.controller('expressionCtrl',function expressionCtrl($scope){

        });