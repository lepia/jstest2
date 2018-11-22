
var calc = require('./calc'); // ./calc 현재 위치에 있는 파일 불러오기(확장자 생략)

console.log('Result : %d', calc.add(3,3));
console.log('Result : %d', calc.subtract(3,3));
console.log('Result : %d', calc.multiply(3,3));
console.log('Result : %d', calc.divide(3,3));