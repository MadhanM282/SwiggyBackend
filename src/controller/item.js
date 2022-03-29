const express = require('express');

const Route = express.Router()

const RestITEM = require("../module/item");

Route.post('/', async(req, res)=>{
    try{
        const rest = await RestITEM.create(req.body);
        res.status(200).send(rest)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

Route.get("/", async(req, res) => {
    try{
        const Item = await RestITEM.find().lean().exec()
        res.status(200).send(Item)
    }
    catch(err){
        res.status(500).send('err', err.message)
    }
})
module.exports = Route