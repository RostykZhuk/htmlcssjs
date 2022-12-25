// Simple promise

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve('Success');
//   } else {
//     reject('failed');
//   }
// });

// p.then((message) => {
//   console.log('this is in the then ' + message);
// }).catch((message) => {
//   console.log('this is in the catch ' + message);
// });

const userLeft = false;
const userWatchingMeme = false;
// -------------  callbacks example
// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':(',
//     });
//   } else if (userWatchingMeme) {
//     errorCallback({
//       name: 'User Watching Cat meme',
//       message: 'WebDevSimplified < Cat',
//     });
//   } else {
//     callback('Thumbs up and Subcribe');
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log('Success:' + message);
//   },
//   (error) => {
//     console.log(error.name + ' ' + error.message);
//   }
// );

// the same with using of Promises
function watchTutorialPromise(callback, errorCallback) {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingMeme) {
      reject({
        name: 'User Watching Cat meme',
        message: 'WebDevSimplified < Cat',
      });
    } else {
      resolve('Thumbs up and Subcribe');
    }
  });
}
watchTutorialPromise()
  .then((message) => {
    console.log('Success:' + message);
  })
  .then(() => {
    console.log('Success x2 ');
  })
  .catch((error) => {
    console.log(error.name + ' ' + error.message);
  })
  .finally(() => {
    console.log('the end of promises');
  });
