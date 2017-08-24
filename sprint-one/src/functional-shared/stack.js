var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

	var someInstance = {};

	someInstance.storage = {};
	someInstance.count = 0;

	extend(someInstance, stackMethods);
	return someInstance;
};

var extend = function(instance, methods) {
	for (var key in methods) {
		instance[key] = methods[key];
	}
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

stackMethods.pop = function() {
	var popped = this.storage[this.count - 1];
	// delete storage[count];
	this.count--;
	return popped;
};

stackMethods.size = function() {
	if (this.count < 0) {
		return 0;
	} else {
		return this.count;
	}
};



