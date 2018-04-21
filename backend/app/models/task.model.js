const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
	taskName: String,
	taskDescription: String,
	minutes: Number,
	seconds: Number
}, {
	timestamps: true
});

module.exports = mongoose.model('task', taskSchema);
