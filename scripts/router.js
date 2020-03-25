

const router = (request, response) => {
    // For Home
    if (request.url === "/") {
        response.writeHead(200, { "content-type": "text/html" })
        response.end("<h1>Hello, this was a success</h1>")
    } else {
        response.writeHead(404, { "content-type": "text/html" })
        response.end("<h1>404 Not Found</h1>");
    }

}

module.exports = router; 