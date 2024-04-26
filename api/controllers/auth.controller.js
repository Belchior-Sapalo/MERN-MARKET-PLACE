const User = require('../models/user.model.js')

const bcrypt = require('bcrypt');
const { errorHandler } = require('../utils/error.js');

const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, email, password: hashPassword})
    try{
        await newUser.save();
        res.status(201).json("usuario cadastrado com sucesso")
    }catch (error){
        next(error);
    }
}

module.exports = {signup}