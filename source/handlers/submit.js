function submitHandler(request, response) {
    let bodyContent = '';

    request.on("data", chunkOfData => {
        bodyContent += chunkOfData.toString();
    })

    request.on("end", () => {
        console.log(bodyContent);
        // const bodyData = new URLSearchParams(bodyContent);
        // const name = bodyData.get("user-name");
        // const title = bodyData.get("title");
        // const text = bodyData.get("textBox");

        response.writeHead(200, {
            "content-type": "text/html"
        });
        response.end(`<h1>hi</h1>`)
    })

    response.on("error", error => {
        console.log(error);
        response.writeHead(500, {
            "content-type": text / html
        });
        const html = `<h1>Wow that's really broken huh</h1>`;
        response.end(html);
    })
}

module.exports = submitHandler;