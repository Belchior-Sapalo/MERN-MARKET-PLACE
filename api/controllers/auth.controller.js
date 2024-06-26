const User = require('../models/user.model.js')
const jwt = require('jsonwebtoken');

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

const sigin = async (req, res, next)=>{
    const {email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, "Usuario nao encontrado"));
        const validPassword = bcrypt.compareSync(password, validUser.password)
        if(!validPassword) return next(errorHandler(401, "Senha invalida"));
        const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET)
        const {password: pass, ...rest} = validUser._doc
        res.cookie('access_token', token, { httpOnly: true}).status(200).json(rest)
        
    }catch (error){
        next(error);
    }
}

module.exports = {signup, sigin}