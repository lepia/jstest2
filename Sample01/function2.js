


function testFunc(val)
{
    if (val > 0)
    {
        console.log("val = %d", val);
        testFunc(--val); // 전위 연산과 후위연산의 결과는 매우 다르다.
        // 여기서 후위연산자를 사용하면 계속 10이 들어가 if문이 반복된다.
    }
}
testFunc(10);

var method = function(val) {
    if (val > 0)
    {
        console.log("val = %d", val);
        arguments.callee(--val); // arguments.callee 함수 자신을 가리킴
    }
}
method(10);



function testFunc() {
    var a = 1;
    function innerMethod() {
        return a + 1;
    }
    return innerMethod(); // 실행결과 리턴
}

var a = testFunc();
console.log(a);



function makeAdder(a) 
{
    return function(b) 
    {
        return a + b;
    }
}
 x = makeAdder(5); // a = 5 지만 makeAdder는 인수를 b로 하는 함수자체를 x에 대입
 y = makeAdder(20);

 //console.log(x(6)); // function(b)의 a + b 결과값을 반환 : b = 6
 //console.log(y(7));
 console.log(x); // 함수 b
 console.log(y);
 
