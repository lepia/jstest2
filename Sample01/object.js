
var obj = {}; // 빈 객체 생성하여 변수에 할당
obj.name = "Young";
console.log(obj.name)

var obj2 = new Object(); // 빈 객체 생성2
obj2["name"] = "홍길동"; // obj2에 속성 부여
console.log(obj2);

var person = { // 클래스가 정의된 객체
    name: "홍길동", // 키와 밸류 형식으로 구성
    age: 33,
    adress: {
        zipcode: 14500,
        city: "서울"
    }
}