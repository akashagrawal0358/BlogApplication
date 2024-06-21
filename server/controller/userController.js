
const User = require('../model/user');
const bcrypt = require('bcrypt') ;

module.exports.signupUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = { username: req.body.username, name: req.body.name, password: hashedPassword }
        const newUser = await new User(user);
        await newUser.save();

        return res.status(200).json({ message: "User signup Successfull " });
    }
    catch (error) {
        return res.status(500).json({ msg: 'Error while signing up user'});
    }
}
