

const express = require('express');
const { signupUser, loginUser } = require('../controller/userController');
const { uploadImage , getImage} = require('../controller/ImageController');
const { createPost } = require('../controller/post-controller');
const { authenticateToken } = require('../controller/jwt-controller');

const upload = require('../utils/upload');


const router = express.Router();


// signupUser, loginUser  in  user-controller
router.post('/signup', signupUser);
router.post('/login', loginUser);


// uploadImage, getImage in  Image-controller
router.post('/file/upload', upload.single('file'), (req, res, next) => {
    console.log('File upload request received');
    if (!req.file) {
        console.error('No file received');
        return res.status(400).json({ error: 'No file received' });
    }
    console.log('File uploaded successfully', req.file);
    next(); 
}, uploadImage);
router.get('/file/:filename' , getImage) ;


// authenticateToken in jwt-controller
// createPost in  post-controller
router.post('/create' , authenticateToken,  createPost);


module.exports = router;
