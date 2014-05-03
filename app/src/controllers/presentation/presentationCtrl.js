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

            $scope.imagesExample = {
                templateUrl: '../../app/resources/images/expressionTemplate.png'
            }

        }])

        .controller('dataBindingCtrl',['$scope',function($scope){

          $scope.src = '../../app/resources/images/Two_Way_Data_Binding.jpg';

          $scope.imagesExample = {
             templateUrl: '../../app/resources/images/dataBindingTemplate.png'
          };

          $scope.templates = {
            dataBindingUrl:"../../app/src/templates/ejemplos/dataBinding/dataBinding.html"
          };

      }])

        .controller('scopeCtrl',['$scope','$http',function($scope,$http){

          $http({
              method:'GET',
              url:'../../app/src/testData/directivasNewScopes.json'
          }).success(function(response){
                 $scope.directiveList =  response.directives;
              });

          $scope.imagesExample = {
              hirachieUrl:'../../app/resources/images/HirachieScope.png'
          }
      }])