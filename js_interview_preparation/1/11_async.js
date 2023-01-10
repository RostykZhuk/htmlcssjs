const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

// Event loop закидує в call stack function first. It executes. call stack is clear
first();
// Event loop закидує в web api. call stack is clear
setTimeout(second, 0);
// Event loop закидує в call stack function third. It executes. call stack is clear
third();
// callback queque executes
