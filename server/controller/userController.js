
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Token = require('../model/token');

dotenv.config();



// -------------------------- User Signup ------------------------------------------------


module.exports.signupUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = { username: req.body.username, name: req.body.name, password: hashedPassword }
        const newUser = await new User(user);
        await newUser.save();

        return res.status(200).json({ message: "User signup Successfull ", isSuccess: true });
    }
    catch (error) {
        return res.status(500).json({ msg: 'Error while signing up user' });
    }
}



// -------------------------- User login ------------------------------------------------



module.exports.loginUser = async (req, res) => {
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).json({ msg: 'Username does not exist' });
    }

    try {
        let match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
           
            const accessToken = jwt.sign( user.toJSON() , process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
            const refreshToken = jwt.sign( user.toJSON() , process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({ token: refreshToken });
            await newToken.save();

            return res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.username });

        } else {
           return res.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
           return res.status(500).json({ msg: 'error while login the user' })
    }
}