// ex2: write your own function which takes a callback#
// challenge#
// Write a function strLength() which takes

// Your name
// A function which it will call with the length of your name
// Now, call this function with the two parameters.

// Your name. This is simple.
// A function. This function will get the length of the string. Use that length to print a message: OMG! my name is X char long!

const strLength = (name, callback) => {
  const userName = callback(name);
  return userName;
};

const getCallback = (name) => `Hello Sir Your name length is ${name.length}`;

strLength('Pritam Kumar', getCallback);
