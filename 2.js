// live ex3: function which takes two callbacks#
// challenge#
// Write a function willThanosKillMe() . This function will take three parameters

// Your name
// Function to call if Thanos doesn't kill you.
// Function to call if Thanos does kill you.
// This function will call success callback if your name has even characters. You won't die.

// But if your name has odd number of characters then you're going to die. Sorry! :(

// Now, call this function with the given parameters. The success function should console a happy message: Yay! I am alive! and the failure function should console your will: Give my bose speakers and apple headphones to my sister

// P.S. Sorry for the grim example. ☹️

const willThanosKillMe = (name, callbackOne, callbackTwo) =>
  name.length % 2 === 0 ? callbackOne() : callbackTwo();

const thanosDontKillMe = () => 'Yay! I am alive!';
const thanosKillMe = () =>
  'Give my bose speakers and apple headphones to my sister';

console.log(willThanosKillMe('Pritam Kumar', thanosDontKillMe, thanosKillMe));
