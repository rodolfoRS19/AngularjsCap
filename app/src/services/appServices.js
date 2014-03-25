/**
 * Created by Rodolfo on 25/03/14.
 */

angular.module('appServiceModule',[])

    .factory('formatStringFactory',[function(){
        return{

            doLinesText : function(argText){
                var lines = argText.split("\n");
                var linesData = [];
                for(var index = 0; lines.length > index; index++){
                    linesData[index] = lines[index];
                }

                return linesData;
            }
        }
    }]);