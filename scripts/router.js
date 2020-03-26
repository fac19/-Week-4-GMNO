const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const submitHandler = require("./handlers/submit");

const router = (request, response) => {
    const url = request.url;
    if (url === "/") {
        homeHandler(request, response);
    } else if(url.includes("public")) {
        publicHandler(request, response);
    }else if(request.url === "/blog-update" && request.method === "POST") {
        submitHandler(request, response);
    }else {
        response.writeHead(404, { "content-type": "text/html" })
        response.end("<h1>404 Not Found</h1>");
    }

}

module.exports = router; 