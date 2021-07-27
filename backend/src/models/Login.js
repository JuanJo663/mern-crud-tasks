const { Schema, model } = require('mongoose');

const loginSchema = new Schema(
    {
        email: String,
        password: { type: String, required: true},
        remember: { type: Boolean },
        //date: Date
    }, {
        timestamps: true
    });

module.exports = model('login', loginSchema);