const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://madhan:mohan@cluster0.ulyic.mongodb.net/Swiggy?retryWrites=true&w=majority")
};