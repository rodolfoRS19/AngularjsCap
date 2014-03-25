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

        presentationModule.controller('expressionCtrl',function expressionCtrl($scope,$http){

            $scope.templates = {
                expressionUrl:  "../../app/src/templates/ejemplos/expression/expression.html"
            };

            $scope.onChangeExpressionContent = function(argIdContent){
                $scope.ExpressionSwitchValue = null;
                if(argIdContent == "index.html"){
                    $scope.ExpressionSwitchValue = "index.html";
                    $scope.loadExpressionIndex();
                }
            };

            $scope.loadExpressionIndex = function(){

                $http({
                    method:'GET',
                    url:'../../app/src/testData/ExampleText/expression/index.txt'
                })
                    .success(function(response){
                        $scope.indexData= $scope.doLinesText(response);
                        return $scope.indexData;
                    })

                $scope.doLinesText = function(argText){
                    debugger;
                    var lines = [];
                    var index = 0;
                    while(argText.length > 0){
                        var startIndex = 0;
                        var endIndex = argText.indexOf("\n");
                        lines[index] = argText.substring(startIndex, endIndex);
                        index++
                    }

                    return lines;
                }
            }

        });