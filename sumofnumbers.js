const _ = require('./__cdnjs.cloudflare.com_ajax_libs_underscore.js_1.8.3_underscore.js');
function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}
function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

function sumRecursion(data, i = 0) {
  if (i === data.length) {
    return 0;
  }
  return data[i] + sumRecursion(data, i + 1);
}
function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}
const test = [1, 2, 3, 4, 5];
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));
