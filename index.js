const express = require('express');

const app = express();

const cors= require('cors');

app.use(cors())

const Restaurent = require('./src/controller/controller')

const ITEM = require('./src/controller/item')

const connect = require('./src/base/db')

app.use(express.json())

app.use("/rest",Restaurent);

app.listen(3090, async (req, res)=>{
    try{
        await connect();
        console.log("Listen")
    }
    catch (err){
        console.log('err', err.message);

    }
})

