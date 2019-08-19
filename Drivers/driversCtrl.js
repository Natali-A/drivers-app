
///import * as data from './Data/drivers.json';
const driversData = [
  {
    "_id": "5d56b092f550332e2521ee1b",
    "name": {
      "first": "Weber",
      "last": "Carter"
    },
    "age": 22,
    "location": {
      "latitude": "53.324405",
      "longitude": "83.436274"
    },
    "picture": "http://placehold.it/32x32",
    "phone": "+1 (837) 416-2565"
  },
  {
    "_id": "5d56b0921cfa142a2544b0ff",
    "name": {
      "first": "Harper",
      "last": "Haley"
    },
    "age": 22,
    "location": {
      "latitude": "-23.921146",
      "longitude": "-59.610875"
    },
    "picture": "http://placehold.it/32x32",
    "phone": "+1 (930) 598-3431"
  },
  {
    "_id": "5d56b092fbfbedfcdef45f76",
    "name": {
      "first": "Marilyn",
      "last": "Richards"
    },
    "age": 64,
    "location": {
      "latitude": "-9.917013",
      "longitude": "-111.881353"
    },
    "picture": "http://placehold.it/32x32",
    "phone": "+1 (893) 414-3998"
  },
  {
    "_id": "5d56b0925c3589d2aa44e499",
    "name": {
      "first": "Leanna",
      "last": "Mays"
    },
    "age": 32,
    "location": {
      "latitude": "-0.227528",
      "longitude": "-95.207303"
    },
    "picture": "http://placehold.it/32x32",
    "phone": "+1 (915) 507-2912"
  },
  {
    "_id": "5d56b092daddf8a99ad278f8",
    "name": {
      "first": "Clay",
      "last": "Webb"
    },
    "age": 27,
    "location": {
      "latitude": "-61.349982",
      "longitude": "14.256531"
    },
    "picture": "http://placehold.it/32x32",
    "phone": "+1 (842) 544-3407"
  }
];

angular.module("deliveryApp")
  .controller("DriversController", ['$scope', 'driversFactory', 'mapFactory',
                                   function ($scope, driversFactory, mapFactory) {
      // fetch drivers data from a file
      const getDrivers = () => {
        return driversData;
      };
      /*
      const getDrivers = () => {
      fetch("./Data/drivers.json")
          .then(res = > res.json())
          .then(data = > console.log(data));
      };*/

      // scope
      $scope.data = getDrivers();

      // bind between the drivers list to the drivers factory,
      // so other controllers can get this information
      driversFactory.data = $scope.data;

      // bind between the filterd value to the dreivers factory
      $scope.filterNameChanged = () => {
        driversFactory.filterValue = $scope.filterNameTxt;
      };

      // remove driver clicked
      $scope.deleteDriver = (index) => {
        $scope.data.splice(index, 1);
        // update value in factory. if someone wants to get the new value
        driversFactory.data = $scope.data;
      };

      // center on map clicked
      $scope.centerMap = (index) => {
        let driverLocation = $scope.data[index].location;
        mapFactory.centerLat = parseFloat(driverLocation.latitude);
        mapFactory.centerLng = parseFloat(driverLocation.longitude);
      }


  }]);
