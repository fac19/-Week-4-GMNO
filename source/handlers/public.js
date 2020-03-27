const fs = require("fs");
const path = require("path");

function publicHandler(request, response) {  
    const types = {
      css: "text/css",
      js: "application/javascript",
    };
  
    const requestURl = request.url;  // assets/style.css
    const pathNames = requestURl.split("/");  // [public, style.css]
    const extension = requestURl.split(".")[1] // [public/style, css]
    const newPath = path.join(__dirname, "..", "..", ...pathNames); 
  
    
    fs.readFile(newPath, (error, file) => {
      if (error) {
        console.log(error);
      } else {
        let type = types[extension];
        response.writeHead(200, {"content-type" : type});
        response.end(file);
      }
    });
  
  }
  
  
  module.exports = publicHandler;
  