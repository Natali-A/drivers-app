const taskData = [
    {
    "_id": "5b5496659a9078ec81876182",
    "title": "sunt",
    "address": "774 Gilmore Court, Fairforest, Minnesota, 6047",
    "scheduled_at": "Thursday, June 18, 2015 4:52 AM",
    "location": {
        "latitude": "-60.225857",
        "longitude": "24.618889"
    }
    },
    {
        "_id": "5b549665d335d302e1f16011",
        "title": "officia",
        "address": "387 Johnson Street, Madaket, Wisconsin, 5074",
        "scheduled_at": "Monday, April 7, 2014 3:21 AM",
        "location": {
            "latitude": "-13.078669",
            "longitude": "169.325985"
        }
    },
    {
        "_id": "5b549665407492a9a5de7c34",
        "title": "adipisicing",
        "address": "378 Homecrest Court, Twilight, Utah, 6895",
        "scheduled_at": "Thursday, July 21, 2016 4:20 AM",
        "location": {
            "latitude": "-87.166776",
            "longitude": "-97.988125"
        }
    },
    {
        "_id": "5b549665b401a5ee40818655",
        "title": "aliquip",
        "address": "920 Clymer Street, Gratton, California, 965",
        "scheduled_at": "Saturday, April 22, 2017 6:54 PM",
        "location": {
            "latitude": "44.332444",
            "longitude": "28.172096"
        }
    },
    {
        "_id": "5b5496654587770283ed9797",
        "title": "ea",
        "address": "128 Glenwood Road, Summerfield, New Hampshire, 4774",
        "scheduled_at": "Friday, June 23, 2017 11:20 PM",
        "location": {
            "latitude": "40.178491",
            "longitude": "24.490322"
        }
    },
    {
        "_id": "5b54966589c3662eb78af9d0",
        "title": "minim",
        "address": "676 Pioneer Street, Smeltertown, Kentucky, 7433",
        "scheduled_at": "Sunday, August 21, 2016 12:53 PM",
        "location": {
            "latitude": "26.931306",
            "longitude": "-27.37491"
        }
    },
    {
        "_id": "5b549665a2166739de8578ba",
        "title": "elit",
        "address": "212 Dorchester Road, Watrous, Connecticut, 8591",
        "scheduled_at": "Tuesday, November 14, 2017 12:16 AM",
        "location": {
            "latitude": "80.431334",
            "longitude": "81.953078"
        }
    },
    {
        "_id": "5b54966581b30801880ad9dd",
        "title": "incididunt",
        "address": "847 Howard Alley, Stewartville, Oregon, 4720",
        "scheduled_at": "Monday, February 17, 2014 12:49 AM",
        "location": {
            "latitude": "-88.946911",
            "longitude": "35.976292"
        }
    },
    {
        "_id": "5b549665a54d8d1e31609593",
        "title": "aliqua",
        "address": "659 Amity Street, Ironton, Louisiana, 9181",
        "scheduled_at": "Monday, October 9, 2017 3:30 AM",
        "location": {
            "latitude": "-75.167494",
            "longitude": "106.842751"
        }
    }
];

angular.module("deliveryApp")
    .controller("TasksController", ['$scope', 'driversFactory', function ($scope, driversFactory) {
        // functions
        // fetch tasks data from a file
        const getTasks = () => {
            return taskData;
        };

        // scope
        $scope.data = getTasks();
        $scope.driversOptions = driversFactory.data;

        // check if filterValue have changed
        $scope.$watch(function(){
          return driversFactory.filterValue;
        }, function(newVal, oldVal){
          $scope.filterValue = driversFactory.filterValue;
        });

        $scope.dropDownChanged = (index, val) => {
          $scope.data[index].selectedAssignee = val;
        }

        // filter the task list according to the filter value and the tasks with
        //  the suitable assignee
        $scope.search = (elm) => {
          // check if the user ask to apply a filter
          if ($scope.filterValue) {
            // check if the current task had been assigned to a driver
            if (elm.selectedAssignee) {
              let fullName = `${elm.selectedAssignee.name.first} ${elm.selectedAssignee.name.last}`;

              // check if the assigned driver match the filter value (no case sensitive check)
              return (fullName.toLowerCase().includes($scope.filterValue.toLowerCase()));
            }

            return false;
          } else {
            return true;
          }

        };

    }]);
