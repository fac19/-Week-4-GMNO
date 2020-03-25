function publicHandler(request, response) {
    const fs = require("fs");
    const path = require("path");

    //need to add the different types we're including in our page
    const types = {
      html : "text/html",
      css : "text/css",
      js : "application/javascript", 
      // ico : "image/x-icon"
    };

    const requestURL = request.url; 
    const pathNames = requestURL.split("/");
    const extension = pathNames[pathNames.length-1].split(".")[1];
    const newPath = path.join(__dirname, "..", ...pathNames);

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
