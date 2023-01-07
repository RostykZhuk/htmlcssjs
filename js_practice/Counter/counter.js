function createCounter(initialCounter) {
  return {
    counter: initialCounter,
    get() {
      return this.counter;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = initialCounter;
    },
  };
}
