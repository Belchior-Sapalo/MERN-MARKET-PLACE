const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')

const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, email, password: hashPassword})
    try{
        await newUser.save();
        res.status(201).json("usuario cadastrado com sucesso")
    }catch (error){
        res.status(500).json(error.errmsg)
    }
}

module.exports = {signup}