angular.module("deliveryApp")
  .controller('MapController', ['$scope', 'mapFactory', 'driversFactory',
                                function($scope, mapFactory, driversFactory) {
    function initialize() {
        $scope.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: { lat: mapFactory.centerLat,
                      lng: mapFactory.centerLng }
        });

        function getLocations() {
          return driversFactory.data.map((driver) => {
            return {
              title: `${driver.name.first} ${driver.name.last}`,
              lat: parseFloat(driver.location.latitude),
              lng: parseFloat(driver.location.longitude)
            }
          });
        };

        function addMarkersOnMap(locations) {
          $scope.infowindow = new google.maps.InfoWindow({
              content: ''
          });

          for (var i = 0; i < locations.length; i++) {
              var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                  map: $scope.map,
                  title: locations[i].title
              });
          }
        };


        $scope.cities = getLocations();
        addMarkersOnMap($scope.cities);

        function moveToLocation(lat, lng){
            var center = new google.maps.LatLng(lat, lng);
            // using global variable:
            $scope.map.panTo(center);
        }

        // check if center location have changed
        $scope.$watch(function(){
          return mapFactory.centerLat;
        }, function(newVal, oldVal){
          moveToLocation(mapFactory.centerLat, mapFactory.centerLng);
        });

        // check if a driver was deletes. or any other update to the drivers data
        $scope.$watch(function() {
          return driversFactory.data;
        }, function(newVal, oldVal) {
          $scope.cities = getLocations();
          addMarkersOnMap($scope.cities);
        });
    }

    $scope.cityDetail = function(index) {
        alert(JSON.stringify($scope.cities[index]));
    }

    google.maps.event.addDomListener(window, 'load', initialize);

}]);
