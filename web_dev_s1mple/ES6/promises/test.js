// function toppings_choice() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log('which topping would you love?'));
//     }, 3000);
//   });
// }
// async function kitchen() {
//   console.log('A');
//   console.log('B');
//   console.log('C');

//   await toppings_choice();

//   console.log('D');
//   console.log('E');
// }

// // Trigger the function

// kitchen();
// let is_shop_open = false;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log('Shop is closed'));
//     }
//   });
// }
// async function kitchen() {
//   try {
//     // time taken to perform this 1 task
//     await time(2000);
//     console.log(`sdfsdf was selected`);
//   } catch (error) {
//     console.log('Customer left', error);
//   } finally {
//     console.log('Day ended, shop closed');
//   }
// }

// // Trigger
// kitchen();

function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject('Delay must be greater than 0');
    }

    setTimeout(() => {
      resolve(`You waited ${delay} milliseconds`);
    }, delay);
  });
}

// setTimeoutPromise(250)
//   .then((msg) => {
//     console.log(msg);
//     console.log('First Timeout');
//     return setTimeoutPromise(500);
//   })
//   .then((msg) => {
//     console.log(msg);
//     console.log('Second Timeout');
//   });

// The same with async await
doStuff();
async function doStuff() {
  const msg1 = await setTimeoutPromise(250);
  console.log(msg1);
  console.log('First Timeout');

  const msg2 = await setTimeoutPromise(500);
  console.log(msg2);
  console.log('Second Timeout');
}
