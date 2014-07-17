
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },
    min: function(numList){
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      };
      return min;
    },

    // spec for each function
    // recieve an array and a function
    // iterate over the array
    // process function on each element
    // return original array

    each: function(array, action) {
      for (var i = 0; i < array.length; i++) {
        action(array[i], i);
      };
      return array;
    },

    // spec for map function
    // recieve an array and a function
    // iterate over array
    // process function on each array element
    // return new array of modified elements

    map: function(array, action) {
      var returnArr = [];
      for (var i = 0; i < array.length; i++) {
        returnArr[i] = action(array[i]);
      };
      return returnArr;
    },

    // spec for filter
    // recieve an array and a function
    // iterate over the array
    // check each element against a condition
    // return a new array of only elements that pass condition

    filter: function(array, action)  {
      var returnArr = [];
      for (var i = 0; i < array.length; i++) {
        var element = action(array[i])
        if (action(element) !== undefined || action(element !== null)){
          returnArr.push(action(element));
        }
      };
      return returnArr;
    },

    // spec for reduce
    // recieve an array and a function
    // interate over the array
    // add each element to a total
    // return the total as a single value

    reduce: function(array, action) {
      var result = 0;
      for (var i = 0; i < array.length; i++) {
        result = action(result, array[i]);
      };
      return result;
    },

    // spec for reject
    // recieve an array and a function
    // iterate over the array
    // check each element against a condition
    // return an array of all of the elements that did not pass the condition

    reject: function(array, action) {
      var returnArr = [];
      for (var i = 0; i < array.length; i++) {
        var element = action(array[i]);
        if (element === undefined) {
          returnArr.push = action(array[i]);
        }
      };
      return returnArr;
    }
  };

  return api;
})();

module.exports = Iterators;













