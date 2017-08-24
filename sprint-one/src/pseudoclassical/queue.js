var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.begin = 0;
  this.end = 0; 
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.begin] = value;
  this.begin++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.end];
  // delete this.storage[count];
  this.end++;
  if (this.end > this.begin) {
    this.end = this.begin;
  }
  return dequeued;
};

Queue.prototype.size = function() {
  return this.begin - this.end;
};