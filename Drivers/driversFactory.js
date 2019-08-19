angular.module("deliveryApp")
  .factory('driversFactory', function() {
    return {
      data: [],
      filterValue : "",

      getData : () => {
        return this.data;
      },
      setData: (newData) => {
        this.data = newData;
      }
    };
  });
