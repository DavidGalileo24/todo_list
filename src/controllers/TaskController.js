const TaskService = require('../services/TaskService');

module.exports = {
    getTasks: async(req, res) => {
        const data = await TaskService.getTasks();
        res.json({
            data: data,
            message: 'Get all tasks successfully!'
        });
    },
}