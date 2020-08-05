const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    name: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.Number,
    email: mongoose.Schema.Types.String,
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task',
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;