var myColor = ["red", "green", "black"];

console.log(myColor.toString()); // 배열요소를 문자로 출력

var newColor = myColor.concat("white", "black");
console.log(newColor); // 배열형태 그대로 출력
console.log(myColor);

console.log(newColor.pop()); // 배열의 마지막값을 제거하면서 제거된 값을 반환
console.log(newColor.toString()); // 원본은 유지됨

console.log(newColor.push("orange")); // 배열에 추가되면서 변경된 배열길이 출력
console.log(newColor);
console.log(newColor.push("blue"));
console.log(newColor);

newColor.reverse(); // 배열을 역순으로 바꿈
console.log(newColor); // 역순 출력

newColor.shift();// 처음 배열을 건너뜀
console.log(newColor.toString());
newColor.unshift("brown"); // 첫 배열에 추가
console.log(newColor.toString());

newColor.splice(0, 2, "test"); // 0 ~ 2번배열을 잘라냄
console.log(newColor.toString());

newColor.sort(); // 배열정렬
console.log(newColor);
