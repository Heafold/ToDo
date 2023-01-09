const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    content: {
        type: String,
    },
})

module.exports = mongoose.model('Task',TaskSchema);