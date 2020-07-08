"use strict";
function expand() {
    return {
        restrict:"A",
        link: function($scope, $element, $attrs) {
            $element.on("focus", function() {
                console.log("this is being focused");
                $element.css("transform", "scale(1.02, 1.02)");
                $element.css("transform-origin", "left");
                // $scope.apply(function() {
                    
                // });
            });
            $element.on("blur", function () {
                $element.css("transform", "");
            });
        }
    }
}
angular.module("App").directive("expand", expand);