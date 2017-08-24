var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  count = 0;
  point = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;          
  };

  someInstance.dequeue = function() {
    var remove = storage[point];  
    point++;
    // condition
    if ( point > count) {
      point === count;
    }
    return remove;
  };

  someInstance.size = function() {
    if (count - point < 0) {
      return 0;
    }
    return count - point;
  };

  return someInstance;
};
