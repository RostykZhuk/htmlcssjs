const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
  reject('Video 1 Deleted');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
  reject('Video 2 Deleted');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
  reject('Video 3 Deleted');
});

// Метод Promise.all(iterable) возвращает промис, который выполнится тогда, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонено любое из переданных промисов.
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
// Метод Promise.race(iterable) возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится первый из переданных промисов, со значением или причиной отклонения этого промиса.
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
