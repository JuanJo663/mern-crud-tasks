const { Schema, model } = require('mongoose');

const signupSchema = new Schema(
    {
        firstName: {type:String,required: true},
        lastName: { type: String, required: true},
        emailAddress: { type: String, required: true },
        password: {type:String, required: true}
        //date: Date
    }, {
        timestamps: true
    });

module.exports = model('signup', signupSchema);