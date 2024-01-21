const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', TaskSchema);