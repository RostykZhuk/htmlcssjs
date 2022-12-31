const car = {
  wheels: 4,
  init() {
    console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`);
  },
};

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Rostyk',
  },
});

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
