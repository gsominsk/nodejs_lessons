const mongoose = require('mongoose');
const { Schema } = mongoose

const taskSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: mongoose.Schema.Types.String,
    message: mongoose.Schema.Types.String,
    spendedTime: mongoose.Schema.Types.Number,
    finished: mongoose.Schema.Types.Boolean,
    created: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;