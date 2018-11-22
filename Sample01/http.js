var http = require('http'); // 서버용 모듈
var server = http.createServer(); // 객체를 만들어 변수에 대입

var port = 3000; // 해당 아이피주소가 사용할 수 있는 포트 

server.listen(port, function() { // listen 서버객체에 해당하는 포트로 접속감지
    console.log("Start Server");
});
