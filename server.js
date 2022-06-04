const express = require("express");
const connect = require("./connection/connect");
const app = express()
const routers = require("./app/router")
app.use("/",routers);

app.listen(8000, async() => {
    console.log("This application listening at port 8000");
    connect();
});
