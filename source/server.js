const http=require("http");
const port = process.env.PORT || 2000; 
const hostName = process.env.HOSTNAME || "localhost"; 
const router = require("./router");

const server = http.createServer(router).listen(port, hostName, () => {
    console.log(`listening http://${hostName}:${port}`);
});