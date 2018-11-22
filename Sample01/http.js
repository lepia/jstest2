var http = require('http'); // 서버용 모듈
var server = http.createServer(); // 객체를 만들어 변수에 대입

var port = 3000; // 해당 아이피주소가 사용할 수 있는 포트 

server.listen(port, function() { // listen 서버객체에 해당하는 포트로 접속감지
    console.log("Start Server");
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log("누군가 접속함");
});

server.on('request', function(req,res) {
    console.log("누군가 요청함");

    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}); // 첫응답 메시지 형태
    res.write("반갑습니다.");
    res.end();
})
