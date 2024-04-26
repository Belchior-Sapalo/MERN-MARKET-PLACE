const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
require('dotenv').config()

const app = express();
app.use(express.json())
app.use('/api/user',  userRouter)
app.use('/api/auth',  authRouter)

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('conectado a base de dados')
}).catch((error)=>{
    console.log(error)
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Erro no servidor"
    return res.status(statusCode).json({
        sucesso: false,
        statusCode,
        message
    })
})

app.listen(3000, ()=>{
    console.log('Servidor no ar')
})
