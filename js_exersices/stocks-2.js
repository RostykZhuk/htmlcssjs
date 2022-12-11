let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];

let maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }
  return result;
};
console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
