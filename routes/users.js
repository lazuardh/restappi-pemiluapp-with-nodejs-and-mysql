var express = require('express');
const {User} = require('../models');
var router = express.Router();
const verifyToken = require('../middleware/verify_token');

/* GET users listing. */
router.get('/',verifyToken,  async (req,res) => {
  const users = await User.findAll({
    attributes: {exclude: ['password']},
  });
  return  res.status(200).json({
    message: 'successfully',
    values: users
  });
} );

//post
// router.post('/',verifyToken, async (req,res) => {

//   const body = req.body;

//   if (!body.name || !body.email) {
//     return res.status(400).json({
//       message: 'nama dan email harus diisi'
//     });
//   }
//   const user = await User.create(body);
//   return res.status(201).json({
//     message: 'successfully',
//     values: user
//   });
// });

// get users by id
router.get('/:userId',verifyToken, async (req, res) => {
  const {userId} = req.params;
  const user = await User.findByPk(userId, {
    attributes: {exclude: ['password']},
  });
  if(!user) return res.status(404).json({
    massage: 'users NOT FOUND'
  });
  return res.json(user);
});

//update users
router.put('/:userId',verifyToken, async (req, res) => {
  const {userId} = req.params;
  const user = await User.findByPk(userId, {
    attributes: {exclude: ['password']},
  });
  if(!user) return res.status(404).json({
    massage: 'users NOT FOUND'
  });

  await user.update(req.body);
  return res.json(user);
});

//delete
router.delete('/:userId',verifyToken, async (req, res) => {
  const {userId} = req.params;
  const user = await User.findByPk(userId);
  if(!user) return res.status(404).json({
    massage: 'users NOT FOUND'
  });

  await user.destroy();
  return res.json({
    message: 'ok'
  });
});
module.exports = router;
