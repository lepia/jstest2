// let name = "JJY"
// let age = 30;
// console.log(age);

let name = "JJY";
let len = name.length;
console.log(len);

let newName = name.replace('JY', 'JJ'); // replace 함수값 반환하여 새로운 변수에 대입하는 형식
console.log(newName);

let char = newName.charAt(2);
console.log(char);

console.log(newName.toUpperCase());
console.log(newName.toLowerCase());

var x = 0;
x += 5;
console.log(x);
console.log('hello' + 'world');
console.log('1' + 2 + 3 + 4); // 타입변환

console.log(123 == '123'); // 타입변환이 되어 true로 출력
// 보다 정확한 비교를 위해서는 === 사용한다.
