const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('conectado')
}).catch((error)=>{
    console.log(error)
})

app.listen(3000, ()=>{
    console.log('Servidor no ar')
})
