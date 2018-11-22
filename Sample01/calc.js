var calc = {}; 

calc.add = function(a, b) { // calc 객체의 add 변수에 함수 대입
    return a + b;
}

calc.subtract = function(a, b) {
    return a -b;
}

calc.multiply = function(a, b) {
    return a * b;
}

calc.divide = function(a, b) {
    return a / b;
}

module.exports = calc; // 만들어진 객체를 requir로 요청해서 사용할 수 있다.