var express = require('express');
var router = express.Router();
const UserControllers = require('../controllers/users');

/* GET users listing. */
router.get('/', UserControllers.getUsers);
router.post('/', UserControllers.createUser);

module.exports = router;
