const jwt = require('jsonwebtoken');
const {User}  = require('../models');

module.exports = async (req,res,next) => {
    /* get auth token*/
    const token = req.headers.authorization;
    // console.log(token);
    if(!token) return res.status(403).json({
        message: 'Incorrect Credential ',
    });

    const jwtToken = token.split(' ').pop();
    // console.log(jwtToken);

    /* verify token token*/
    try {
        const data = jwt.verify(jwtToken, "secret-key");
        const user = await User.findByPk(data.data.id);

        if(!user) return res.status(404).json({
            message: 'User not found'
        });

        req.user = user;
        next(); 
    } catch (error) {
        return res.status(403).json({
            message: 'Incorrect Credential'
        });
    }
}