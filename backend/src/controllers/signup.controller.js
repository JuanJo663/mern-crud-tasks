const signCtrl = {};

const Signup = require('../models/Signup');

signCtrl.getSignup = async (req, res) => {
    const signups = await signup.find();
    res.json(signup);
};

signCtrl.createSignup = async (req, res) => {
    const { firstName, lastName, emailAddress, password } = req.body;
    const newSign = new Sign({
        firstName,
        lastName,
        emailAddress,
        password
    });
    await newSign.save();
    res.json('New Note added');
};

// loginCtrl.getLogin = async (req, res) => {
//     const Login = await Login.findById(req.params.id);
//     res.json(login);
// }

// loginCtrl.deleteNote = async (req, res) => {
//     await Note.findByIdAndDelete(req.params.id)
//     res.json('Note Deleted');
// }

module.exports = signCtrl;