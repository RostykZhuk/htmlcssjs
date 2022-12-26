// array sort changes the current array
// bad result
// const unsorted = [3, 1, 4, 2];

// const asceding = unsorted.sort((a, b) => a - b).map((d) => d * 10);

// const desceding = asceding.sort((a, b) => b - a).map((d) => d * 10);

// console.log('unsorted', unsorted);
// console.log('asceding', asceding);
// console.log('desceding', desceding);

// use spread operator

const unsorted = [3, 1, 4, 2];

const asceding = [...unsorted].sort((a, b) => a - b).map((d) => d * 10);

const desceding = [...asceding].sort((a, b) => b - a).map((d) => d * 10);

console.log('unsorted', unsorted);
console.log('asceding', asceding);
console.log('desceding', desceding);
