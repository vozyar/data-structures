var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.begin = 0;
  someInstance.end = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.begin] = value;
  this.begin++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[this.end];
  // delete this.storage[count];
  this.end++;
  if (this.end > this.begin) {
    this.end = this.begin;
  }
  return dequeued;
};

queueMethods.size = function() {
  return this.begin - this.end;
};
