const mongoose = require('mongoose');
const { Schema } = mongoose

const taskSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: mongoose.Schema.Types.String,
    message: mongoose.Schema.Types.String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;