let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquids: ['water', 'ice'],
  holder: ['cup', 'cone', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};
let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log('production has started');

    setTimeout(() => {
      console.log('the fruit had been chopped');

      setTimeout(() => {
        console.log(
          `${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`
        );
        setTimeout(() => {
          console.log('the machine was started');
          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as topings`);

              setTimeout(() => {
                console.log('serve ice cream');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
