const {User} = require('../models');

const getAllUsers = async (req, res) => {
    const users = await User.findAll({
        attributes: {exclude: ['password']},
    });
    return  res.status(200).json({
        message: 'successfully',
        values: users
    });
}

const getUserById = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findByPk(userId, { 
        attributes: {exclude: ['password']},
    });

    if(!user) return res.status(404).json({
        massage: 'users NOT FOUND'
    });
    return res.json(user);
}

const updateUser = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findByPk(userId, {
        attributes: {exclude: ['password']},
    });

    if(!user) return res.status(404).json({
        massage: 'users NOT FOUND'
    });
  
    await user.update(req.body);
    return res.json(user);
}

const deleteUser = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findByPk(userId);

    if(!user) return res.status(404).json({
        massage: 'users NOT FOUND'
    });
  
    await user.destroy();
    return res.json({
        message: 'delete successfully'
    });
}

module.exports = {getAllUsers, getUserById, updateUser, deleteUser}