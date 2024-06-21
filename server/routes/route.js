
const express = require('express');
const { signupRoute } = require('../controller/userController.js')

const router = express.Router() ;

//router.post('/login', loginRoute ) ;
router.post('/signup', signupRoute ) ;



module.exports = router;