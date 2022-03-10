// (function myIIFE() {
//   num += 1;
//   console.log(num);
//   return num < 5 ? myIIFE(num) : console.log('finished!!');
// })((num = 0));

const { reset } = require('yargs');

// global
// const name = 'Yumi';

// const Hello = () => {
//   return `Hello ${name}!`;
// };

// (() => {
//   const name = 'Pitt';
//   const Hello = () => {
//     return `Hello ${name}!`;
//   };
//   console.log(name); // result Pitt
//   console.log(Hello()); // result Hello Pitt!
// })();

// console.log(name); // result Yumi
// console.log(Hello()); // result Hello Yumi!

// const increment = (() => {
//   let result = 0;
//   console.log(result);
//   const credits = (num) => {
//     console.log(`I have ${num} credits.`);
//   };
//   return () => {
//     result += 1;
//     credits(result);
//   };
// })();

// increment(); // I have 1 credits.
// increment(); // I have 2 credits.

// const Score = (() => {
//   let result = 0;
//   const current = () => {
//     return result;
//   };

//   const increment = () => {
//     result += 1;
//   };

//   const reset = () => {
//     result = 0;
//   };

//   return {
//     current: current,
//     increment: increment,
//     reset: reset,
//   };
// })();

// Score.increment();
// console.log(Score.current());
// Score.increment();
// console.log(Score.current());
// Score.reset();
// console.log(Score.current());

((namespace) => {
  namespace.count = 0;
  namespace.current = function () {
    return `App count is ${this.count}`;
  };
  namespace.increment = function () {
    this.count += 1;
  };
  namespace.reset = function () {
    this.count = 0;
  };
})((window.App = window.App || {}));

App.increment();
