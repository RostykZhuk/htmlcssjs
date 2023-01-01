class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  create(model, price) {
    const candidate = this.getCar(model);
    if (candidate) {
      return candidate;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }
  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

const bmwM5 = factory.create('bmw', 100000);
const bmwX3 = factory.create('bmw', 70000);
const audiRSQ8 = factory.create('audi', 130000);

console.log(bmwM5);
console.log(audiRSQ8);
// В обєкті factory ми вже зберегли такий елемент як бмв.коли ми створюєм новий бмв ми берем його з кеша
console.log(bmwM5 === bmwX3);
