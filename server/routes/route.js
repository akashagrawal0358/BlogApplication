const express = require('express');
const { signupUser, loginUser } = require('../controller/userController');
const { uploadImage } = require('../controller/ImageController');
const upload = require('../utils/upload');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/file/upload', upload.single('file'), (req, res, next) => {
    console.log('File upload request received');
    if (!req.file) {
        console.error('No file received');
        return res.status(400).json({ error: 'No file received' });
    }
    console.log('File uploaded successfully', req.file);
    next(); 
}, uploadImage);

module.exports = router;
