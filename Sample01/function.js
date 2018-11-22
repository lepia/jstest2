function add(x, y) { // 반환형과 매개변수 타입을 지정하지 않는다.
    var total = x + y;
    return total;
}

var result = add(2, 3);
console.log(result);

function add2() { // 매개변수 없이 전달 가능
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add2(2, 3, 4, 5)); // arguments로 받는다.

var avg = function() { // 익명함수 (변수에 할당 --> 변수를 통해 함수 사용) : 변수처럼 사용
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

avg(); // 변수가 참조하는 함수를 실행
console.log(avg(3, 4, 5, 6));

// var newVal = avg 함수 자체를 변수에 대입
// var newVal = avg() 함수가 실행된 결과값을 변수에 대입

function makePerson(first, last) {
    return { // first, last변수와 fullName, fullNamereversed 함수를 가진 객체 반환하는 함수
        first : first,
        last : last,
        fullName : function() {
            return this.first + '' + this.last; // this : 객체안의 자신
        },
        fullNamereversed : function() {
            return this.last + ' , ' + this.first;
        }
    }
}

var person = makePerson("JJY", "Ko");
console.log(person.fullName());
console.log(person.fullNamereversed());

var func = person.fullName()
// console.log(func()); 외부에서 함수만 불러 실행한 것이므로 this를 인식하지 못함