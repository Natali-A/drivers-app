angular.module("deliveryApp")
    .directive('tasksList', function() {
        return {
            restrict: 'E',
            templateUrl: 'Tasks/tasksList.html'
        };
    });
