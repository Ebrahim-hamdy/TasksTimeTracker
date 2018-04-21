module.exports = (app) => {
    const tasks = require('../controllers/task.controller.js');

    // Create a new Task
    app.post('/tasks/createTask', tasks.create);

    // Retrieve all Tasks
    app.get('/tasks/getTasks', tasks.findAll);

    // Retrieve a single Task with taskId
    app.get('/tasks/getTask/:taskId', tasks.findOne);

    // Update a Task with taskId
    app.put('/tasks/updateTask/:taskId', tasks.update);

    // Delete a Task with taskId
    app.delete('/tasks/deleteTask/:taskId', tasks.delete);
}
