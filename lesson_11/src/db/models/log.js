const mongoose = require('mongoose');
const { Schema } = mongoose

const logSchema = new Schema({
    url: mongoose.Schema.Types.String,
    method: mongoose.Schema.Types.String,
    headers: mongoose.Schema.Types.Mixed,
    params: mongoose.Schema.Types.Mixed,
    date: {
        type: Date,
        default: Date.now
    }
});

const Log = mongoose.model('logs', logSchema);

module.exports = Log;