var express = require('express');
var router = express.Router();
const verifyToken = require('../middleware/verify_token');
const userControllers = require('../controllers/userController');

/* GET users listing. */
router.get('/',verifyToken, userControllers.getAllUsers);

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
router.get('/:userId',verifyToken, userControllers.getUserById);

//update users
router.put('/:userId',verifyToken, userControllers.updateUser);

//delete
router.delete('/:userId',verifyToken, userControllers.deleteUser);

module.exports = router;
