const fs = require('fs')
const path = require('path')
const templates = require("../temp")

function homeHandler(request, response) {
  response.writeHead(200, {
    "content-type": "text/html"
  });
  const homeHTML = templates.home();
  response.end(homeHTML);
}

module.exports = homeHandler