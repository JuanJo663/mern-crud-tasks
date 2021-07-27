const loginCtrl = {};

const Login = require('../models/Login');

// loginCtrl.getLogin = async (req, res) => {
//     const logins = await Login.find();
//     res.json(login);
// };

loginCtrl.createLogin = async (req, res) => {
    const { email, password, remember } = req.body;
    const newLogin = new Login({
        email,
        password,
        remember
    });
    await newLogin.save();
    res.json('New Login added');
};

module.exports = loginCtrl;
// loginCtrl.getLogin = async (req, res) => {
//     const Login = await Login.findById(req.params.id);
//     res.json(login);
// }

// loginCtrl.deleteLogin = async (req, res) => {
//     await Login.findByIdAndDelete(req.params.id)
//     res.json('Note Deleted');
// }