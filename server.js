"use strict";
const http = require("node:http");
const { open } = require("node:fs/promises");

/*
Structure to dictate the html files that I will be serving in a format similar to req.url
*/
const sfiles = new Set();
sfiles.add('/index.html');

async function serveFile(file, resp) {
    /*
        Function should only append body + Content-Length header & end stream
    */
    //Directory traversal should not be possible
    const fh = await open("." + file);
    const cont = await fh.readFile("utf-8");
    resp.setHeader("Content-Length", Buffer.byteLength(cont));
    resp.end(cont, "utf-8");
}

const server = http.createServer((req, resp) => {
    //Request Handling
    let meth = req.method;
    let url = req.url;
    switch (true) {
        case meth === "GET" && url === '/':
            resp.setHeader("Content-Type", "text/html");
            serveFile('/index.html', resp);
            break;
        case meth == "GET" && url.endsWith('.html'):
            resp.setHeader("Content-Type", "text/html");
            serveFile(url, resp);
            break;
        default:
            resp.statusCode = 404;
            resp.end();
    }
});


function startServer() {
    const hostname = "localhost";
    const port = 3000;
    // Encode this into a promise
    let startServer = server.listen(port, hostname, () => { console.log(`Server started on http://${hostname}:${port}`); });
}

if (require.main === module) {
    startServer();
}
