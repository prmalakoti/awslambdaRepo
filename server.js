const http = require('http');
const app = require("./app");
const dotenv = require('dotenv');
dotenv.config();
var httpServer = http.createServer(app);

const server = httpServer.listen(process.env.PORT, () =>{
    console.log("Serever up and running : ", process.env.PORT);
})