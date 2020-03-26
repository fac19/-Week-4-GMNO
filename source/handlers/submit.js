const templates = require("../temp")
const { parse } = require('querystring');
// Global Arrays
let blogPostArr = []; 
let submitHTML = [];

function submitHandler(request, response) {
    let bodyContent = '';

    request.on("data", chunkOfData => {
        bodyContent += chunkOfData.toString();
    })

    request.on("end", () => {
        const blogEntryObj = parse(bodyContent);
        blogPostArr.push(blogEntryObj); 

        response.writeHead(200, {
            "content-type": "text/html"
        });
        
        // only print the last element of the array 
        let blogPostArrLast = blogPostArr[blogPostArr.length-1];
        
        submitHTML = templates.submit(blogPostArrLast['title'], blogPostArrLast["user-name"], blogPostArrLast['textBox']);
        console.log(blogPostArr); 
        response.end(submitHTML);
    })

    response.on("error", error => {
        console.log(error);
        response.writeHead(500, {
            "content-type": "text/html"
        });
        const html = `<h1>Wow that's really broken huh</h1>`;
        response.end(html);
    })
}

module.exports = submitHandler;