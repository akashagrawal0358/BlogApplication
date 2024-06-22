
const express = require('express');
const { signupUser , loginUser} = require('../controller/userController.js')

const router = express.Router() ;

//router.post('/login', loginRoute ) ;
router.post('/signup', signupUser ) ;
router.post('/login', loginUser ) ;



module.exports = router;