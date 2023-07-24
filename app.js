const http = require('http');
const os = require('os');

console.log("Learning Kubernetes server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);          //이게 clusterIP_service.yaml파일의 spec-ports-targetPort임. Pod가 듣고 있는 포트넘버
kubetpl/rs/rs.yaml