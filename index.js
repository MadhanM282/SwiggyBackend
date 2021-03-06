const express = require('express');

const app = express();

const cors= require('cors');

app.use(cors())

const Port = process.env.PORT

const Restaurent = require('./src/controller/controller')

const ITEM = require('./src/controller/item')

const connect = require('./src/base/db')

app.use(express.json())

app.use("/rest",Restaurent);

app.use("/item",ITEM)

app.listen(Port||3090, async (req, res)=>{
    try{
        await connect();
        console.log("Listen")
    }
    catch (err){
        console.log('err', err.message);

    }
})

