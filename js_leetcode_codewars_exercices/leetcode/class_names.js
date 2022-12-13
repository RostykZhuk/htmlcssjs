// unsorted array of class names
let classNames = [
  'header',
  'menu',
  'menu-item',
  'menu-item',
  'menu-item',
  'footer',
  'menu',
  'link',
  'link',
  'link',
  'link',
];

// we should get an result of sorted classes with most frequencies
let classNamesCount = {};

for (let i = 0; i < classNames.length; i++) {
  let current = classNames[i];
  if (classNamesCount[current]) {
    classNamesCount[current] += 1;
  } else {
    classNamesCount[current] = 1;
  }
}
let result = Object.keys(classNamesCount).sort(
  (a, b) => classNamesCount[b] - classNamesCount[a]
);
console.log(result);
