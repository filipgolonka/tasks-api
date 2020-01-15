const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    remindDate: Date,
    isCompleted: Boolean,
});

const Task = mongoose.model(
    'Task',
    schema
);

module.exports = Task;
