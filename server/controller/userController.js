
const User = require('../model/user');


module.exports.signupRoute = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await new User(user);
        await newUser.save();

        return res.status(200).json({ message: "User signup Successfull ", isSucces: true });
    }
    catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}
