// var http = require('http'); // 1 - Import Node.js core module

// var server = http.createServer(function (req, res) {   // 2 - creating server

//     //handle incomming requests here..

// });

// server.listen(5000); //3 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')

// var http = require('http'); // Import Node.js core module

// var server = http.createServer(function (req, res) {   //create web server
//     if (req.url == '/') { //check the URL of the current request
        
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
//         // set response content    
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/student") {
        
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is student Page.</p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/admin") {
        
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();
    
//     }
//     else
//         res.end('Invalid Request!');

// });

// server.listen(5000); //6 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')

// var fs = require('fs');

// fs.readFile('TestFile.txt', function (err, data) {
//     if (err) 
//         throw err;

//     console.log(data.toString());
// });

// var fs = require('fs');

// fs.writeFile('test.txt', 'Hello World!', function (err) { 
//     if (err)
//         console.log(err);
//     else
//         console.log('Write operation complete.');
// });
// var fs = require('fs');

// fs.appendFile('test.txt', 'Samriddhi Tiwary', function (err) { 
//                         if (err)
//         console.log(err);
//                         else
//         console.log('Append operation complete.');
// });

// var fs = require('fs');

// fs.unlink('test.txt', function () {
//     console.log('File Deleted Successfully.');
// });