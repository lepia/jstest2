// 함수를 통한 객체 생성
function Person(first, last) { 
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function() {
        return this.last + ',' + this.first;
    }
}

var person = new Person('홍', '길동'); // 객체 생성
// 클래스 생성해서 객체 생성한 형식과 동일한 객체가 생성됨

console.log(person.fullName());


// 중복함수를 공유하는 방법
function Person2(first, last) {
    this.first = first;
    this.last = last;
}

Person2.prototype.fullName = function() { // prototype속성 : 하나의 속성을 공유해서 사용
    return this.first + ' ' + this.last;
}

Person2.prototype.fullNameReversed = function() {
    return this.last + ' ' + this.first;
}

var person2 = new Person2("김", "철수");
console.log(person2.fullName());

// 클래스로 객체 생성
class Person3 {
    constructor(first, last) { // 생성자
        this.first = first;
        this.last = last;
    }
    fullName() {
        return this.first + ' ' + this.last;
    }
}

var person3 = new Person3("최", "병서");
console.log(person3.fullName());