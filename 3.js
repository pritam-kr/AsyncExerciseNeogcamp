// ex4: use setTimeOut()#
// challenge#
// Learn how to use setTimeout()
// Now, write a function that takes a message and a delay and print that message after the delay.
// understanding#
// setTimeout() places the callback function on the event queue after the given time.

const getDelayMessage = (message, delay) => {
  setTimeout(() => {
    `This is your message ${message}`;
  }, delay);
};

getDelayMessage('Hello', 5000);
