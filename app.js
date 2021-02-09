const express   =  require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost/AlienDBox';

const app = express();


mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log('connected');
})
app.use(express.json())
const alienRouter = require('./routers/alien')
app.use('/alien',alienRouter);


app.listen(9602,'127.0.0.1',function(){
    console.log('server started');
})

