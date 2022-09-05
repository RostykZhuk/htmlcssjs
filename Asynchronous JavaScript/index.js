// let stocks = {
//   Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts'],
// };

// let is_shop_open = true;

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       resolve('order placed');
//     } else {
//       reject('shop is closed');
//     }
//   });
// };

// order().then();
// order().then();
// order().then();
// order().then();
// order().catch();
// order().finally();

async function order() {
  try {
    await abc;
  } catch (err) {
    console.log('abc doesnt exist', err);
  } finally {
    console.log('finally');
  }
}

order();
