const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    _id: String,
    name: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.Number,
    email: mongoose.Schema.Types.String,
    tasks: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'tasks',
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;