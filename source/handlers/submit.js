const templates = require("../temp")
const { parse } = require('querystring');

function submitHandler(request, response) {
    let bodyContent = '';

    request.on("data", chunkOfData => {
        bodyContent += chunkOfData.toString();
    })

    request.on("end", () => {
        const blogEntryObj = parse(bodyContent);

        response.writeHead(200, {
            "content-type": "text/html"
        });

        let submitHTML = templates.submit(blogEntryObj['title'], blogEntryObj["user-name"], blogEntryObj['textBox']); 
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