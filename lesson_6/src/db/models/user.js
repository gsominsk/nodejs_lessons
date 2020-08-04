const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    id: mongoose.Schema.Types.Number,
    name: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.Number,
    email: mongoose.Schema.Types.String,
    friends: [
        {
            id: Number,
            name: String,
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;