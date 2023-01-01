function networkFetch(url) {
  return `${url} - Server's answer`;
}

const cash = new Set();

const proxyFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cash.has(url)) {
      return `${url} cash answer`;
    } else {
      cash.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

console.log(proxyFetch('angular.io'));
console.log(proxyFetch('react.io'));
console.log(proxyFetch('angular.io'));
