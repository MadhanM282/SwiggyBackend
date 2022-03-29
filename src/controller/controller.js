const express = require('express');

const Route = express.Router()

const Rest = require("../module/rest");

Route.post('/', async(req, res)=>{
    try{
        const rest = await Rest.create(req.body);
        res.status(200).send(rest)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

Route.get("/", async(req, res) => {
    try{
        const Restaurent = await Rest.find().lean().exec()
        res.status(200).send(Restaurent)
    }
    catch(err){
        res.status(500).send('err', err.message)
    }
})
module.exports = Route