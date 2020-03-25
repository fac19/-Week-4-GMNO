function submitHandler(request, response){
let body = "";
//call back runs everytime the stream has the next bits of data
request.on("data", stream =>{
    body += stream;
})

// callback runs when request finishes and we have all the data
request.on("end", () => {
    const data = new URLSearchParams(body);
    const name = data.get("user-name");
    const textBody = data.get("text-body");
    console.log(textBody); 
    response.writeHead(200, {"content-type": "text/html"});
    response.end(`<h1>Cheers for the submission ${name}</h1>`);
})

request.on("error", error => {
    //do an error 
});
}

module.exports = submitHandler; 