const httpd = require('http');
const port = 8000;

const server = httpd.createServer( function (req, res) {
        res.write('Hello world');
        res.end();
});

server.listen(port,null,null, function (err) {
    if ( err ) {
        console.log ("Couldn't launch the server");
    }
    console.log (`Server listening on port: ${port}`);
});
