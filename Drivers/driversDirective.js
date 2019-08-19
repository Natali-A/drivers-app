angular.module("deliveryApp")
  .directive('driversList', function() {
  return {
    restrict: 'E',
    templateUrl: 'Drivers/driversList.html'
  };
});
