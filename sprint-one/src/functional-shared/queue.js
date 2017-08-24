var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.begin = 0;
  someInstance.end = 0;

  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(instance, methods) {
	for (var key in methods) {
		instance[key] = methods[key]
	}
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.begin] = value;
	this.begin++;
};

queueMethods.dequeue = function() {
	var dequeued = this.storage[this.end];
	this.end++
	if (this.end > this.begin) {
		this.end = this.begin
	}
	return dequeued;
};

queueMethods.size = function() {
	return this.begin - this.end;
};