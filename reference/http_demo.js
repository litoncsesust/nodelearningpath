const http = require('http');

// Create server object
http.createServer((req, res) => {
    //  wrtire response
    res.write("Hello WOrld!")
    res.end()
}).listen(8000, () => console.log("Server Running"));
