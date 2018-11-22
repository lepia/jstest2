
var fs = require('fs'); // fs 파일을 읽고 쓰기 위한 모듈 : 간단한 로그 남길때 


// 파일읽기(readFile 대상파일, 인코딩, 읽기완료후 함수형태로 전달)
var data = fs.readFile('../README.md', 'utf-8', function(err, data) {
    console.log("DATA = " + data);
});

// 파일쓰기(writeFile 작성할 글이 저장될 파일명과 위치, 쓸 내용, 글작성완료후 동작을 전달할 함수)
fs.writeFile('./output.txt', 'Hello World', function(err) { //err 인자값을 인식
    if(err) {
        console.log('Error :' +err);
    }
    console.log("쓰기완료");
})
