const mongoose = require('mongoose');

const restaurentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        average_cost: { type: Number, required: true },
        location: { type: String, required: true },
        category: { type: String, required: true },
        image_url:{ type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)
module.exports = mongoose.model("restaurent", restaurentSchema)


/*
location
type
image
*/