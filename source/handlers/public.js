function publicHandler(request, response) {
    const fs = require("fs");
    const path = require("path");
  
    const types = {
      css: "text/css",
      js: "application/javascript",
    };
  
    const requestURl = request.url;
    const pathNames = requestURl.split("/");
    const extension = pathNames[pathNames.length-1].split(".")[1];
    const newPath = path.join(__dirname, "..", ...pathNames);
    console.log(newPath);
  
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
  