// Description
// Write a function called 'createCounter' that returns an object with two methods: 'increment' and 'decrement'.
// Both methods should modify a private 'count' variable, and return the current count when called.
// The catch: You must ensure the variable remains private using closure.
// For example:

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.increment()); // 4

// Hint: Use a closure to maintain the state of count.
// Open your console and console log your counter to see its status, i.e. -> console.log('counter status: ', counter.increment())
