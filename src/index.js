const express = require('express');

const connect = require('./configs/db');

const userController = require('./controllers/user.controller');

const { signup, login } = require('./controllers/auth.controller');

const app = express();

app.use(express.json());

app.post('/signup', signup);
app.post('/login', login);

app.use('/users', userController);

app.listen(2345, async () => {
    try{
        await connect();
    }
    catch(err)
    {
        console.log(err.message);
    }
    console.log('Listening on Port 2345');
});