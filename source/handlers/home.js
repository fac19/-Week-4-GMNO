const templates = require("../temp")

function homeHandler(request, response) {
  response.writeHead(200, {
    "content-type": "text/html"
  });
  const homeHTML = templates.home();
  response.end(homeHTML);

response.on("error", error => {
  console.log(error);
  response.writeHead(500, {
      "content-type": "text/html"
  });
  const html = `<h1>Wow that's really broken huh</h1>`;
  response.end(html);
})

}

module.exports = homeHandler