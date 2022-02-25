const mongoose = require("mongoose");
const connect = async function () {
    try {
        await mongoose.connect("mongodb://localhost:27017/mailDB");
        console.log("Db connect successfully");
    } catch (error) {
        return console.log(error.message);
    }
}

module.exports = connect