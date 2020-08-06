const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    login: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task',
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(next)  {
    const user = this;

    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(3);
    user.password = await bcrypt.hash(user.password, salt);

    next();
});

userSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;