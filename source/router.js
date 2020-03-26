const homeHandler = require("./handlers/home.js");
const submitHandler = require("./handlers/submit.js");
const publicHandler = require("./handlers/public.js")

const router = (request, response) => {
    
    if (request.url === "/") {
        homeHandler(request, response);
    } else if (request.url.includes("public")){  
        publicHandler(request, response);
    } else if (request.url === "/blog-update" && request.method === "POST") {
        submitHandler(request, response);
    } else {
        response.writeHead(404, {
            "content-type": "text/html"
        })
        response.end("<h1>404 Not Found</h1>");
    }

}

module.exports = router;