// setTimeout(() => console.log('A'), 1000); // 2nd
// setTimeout(() => console.log('B'), 400); // 1st
// setTimeout(() => console.log('C'), 1300); // 3rd

// setTimeout(() => console.log('Hello Pritam A'), 0);
// setTimeout(() => console.log('Hello Pritam B'), 0);
// setTimeout(() => console.log('Hello Pritam C'), 0);

// console.log('A');
// setTimeout(() => console.log('B'), 0);
// console.log('C');

// //1000 miliSecond = 1sec

// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`);
//       }
//       resolve(`from server: ${msg}`);
//     }, 3000);
//   });
// }

// fakeFetch('Error occured', true).then((res) => {
//     return res;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error)
//   })

const getPromieMess = async (message, promiseReject) => {
  let promise = new Promise((resolve, reject) => {
    if (!promiseReject) {
      resolve(`Promise resolved ${message}`);
    } else {
      reject(`Promise reject ${message}`);
    }
  });

  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getPromieMess('Hello Pritam', true);
