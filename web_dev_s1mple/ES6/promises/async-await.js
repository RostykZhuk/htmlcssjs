function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === 'Google') {
      resolve(`${location} says HI`);
    } else {
      reject(`We can only talk to Goggle`);
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest('Google')
//   .then((response) => {
//     console.log('response received');
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => console.log(err));

//  the same using async await

async function doWork() {
  try {
    const response = await makeRequest('Google');
    console.log('response received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();
