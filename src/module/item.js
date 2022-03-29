// location rating name time 
const mongoose = require('mongoose');


//geo schema

//item schema
const itemSchema = new mongoose.Schema(
    {
        restaurent: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        name: { type: String, required: true },
        img_url: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: false,
    }

)
module.exports = mongoose.model("item", itemSchema)



