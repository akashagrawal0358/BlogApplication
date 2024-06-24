
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const token = require('../model/token');

dotenv.config();


// router.post('/create' , authenticateToken,  createPost);
module.exports.authenticateToken = (request, response, next) => {
    //  header authorization in service/api
    const authHeader = request.headers['authorization'];

    // In session storage,  key    value 
    // accessToken	   Bearer eyJhbGciO.....
    //   Bearer is on 0th  index 
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) {
        return response.status(401).json({ msg: 'token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
        if (error) {
            return response.status(403).json({ msg: 'invalid token' })
        }
        request.user = user;

        //  router.post('/create' , authenticateToken,  createPost);
        // used to pass from authenticateToken to createPost 
        next();
    })
}
