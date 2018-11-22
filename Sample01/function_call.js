

function add (a, b, callback) {
    var result = a + b;
    callback(result); // 결과값을 리턴하지 않고 함수에게 전달한 것
}

// function resultFunc(result) { // 전달하는 역할을 하는 함수이므로 이름이 필요없다.
//     console.log("Result = %d", result);
// }

add(10, 10,function(result) { 
    console.log("Result = %d", result);

    add(5, 5,function(result) { // 결과값을 순차적으로 처리해야 할 때 
        console.log("Result = %d", result);
    });
}); // 바로 함수 전달 --> 함수 넣는 위치는 늘 마지막에 할당받도록 작성
  





