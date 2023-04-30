const bcrypt = require('bcrypt');
const {User}  = require('../models');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const {body} = req;

    if(!body.email || !body.password) return res.status(400).json({
        message: 'email and password must be provided'
    });

    //check email
    const user = await User.findOne({
        where: {email: body.email}
    });
    if(!user) return res.status(400).json({
        message: 'Email not found'
    });

    //check password
    const ispasswordCorrect = bcrypt.compareSync(body.password, user.password);

    if(!ispasswordCorrect) return res.status(400).json({
        message: 'wrong password'
    });
    
    const data = {
        id: user.id,
        name: user.name,
        emai: user.email
    };

    const token = jwt.sign({data}, 'secret-key', {
        expiresIn: "30h"
    });

    return res.json({
        // message: 'login success',
        // status: 'succesfully',
        // values: user,
        token 
    });
}

const register = async (req, res) => {
    const {body} = req;

    //validate users input
    if (!body.name || !body.email || !body.password) return res.status(400).json({
        message: 'name, email ,password must be provided'
    });

    //check users
    const isEmailUsed = await User.findOne({
        email: body.email,
    });

    if(isEmailUsed) return res.status(400).json({
        message: 'All ready taken',
    });

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const password = bcrypt.hashSync(body.password, salt);
    const user = await User.create({
        ...body,
        password
    });
    return res.json({
        message: 'create users',
        status: 'succesfully',
        values: user,
    });
}

module.exports = {login, register};