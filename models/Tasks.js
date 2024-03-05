const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, ' must provide name'],
        trim: true,
        maxLenght: [20, 'name can not be more than 20 characters'],
    }, 
    completed: {
        type: Boolean,
        default: false,
    },
    completed2: {
        type: String,
        default: 'name can not be more than 20 characters',
    },
    
})

module.exports = mongoose.model('Task', TaskSchema)