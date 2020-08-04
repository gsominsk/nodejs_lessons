const mongoose = require('mongoose');
const { Schema } = mongoose

const taskSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: mongoose.Schema.Types.Number,
    userId: mongoose.Schema.Types.Number,
    title: mongoose.Schema.Types.String,
    message: mongoose.Schema.Types.String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;