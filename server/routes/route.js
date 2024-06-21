
const express = require('express');
const { signupUser } = require('../controller/userController.js')

const router = express.Router() ;

//router.post('/login', loginRoute ) ;
router.post('/signup', signupUser ) ;



module.exports = router;