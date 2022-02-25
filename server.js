const express = require("express");
const connect = require("./connection/connect");
const app = express()
app.use("/test", async (req, res, next) => {
    res.status(200).send({data: "test API"})
})
app.listen(8000, async() => {
    console.log("This application listening at port 8000");
    connect();
})