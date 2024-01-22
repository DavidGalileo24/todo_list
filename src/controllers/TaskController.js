const TaskService = require('../services/TaskService');

module.exports = {
    getTasks: async(req, res) => {
        const data = await TaskService.getTasks();
        res.json({
            data: data,
            message: 'Get all tasks successfully!'
        });
    },
    getTaskById: async(req, res) => {
        const data = await TaskService.getTaskById(req.params.id);
        res.json({
            data: data,
            message: 'Get task successfully!'
        });
    },
    storeTask: async(req, res) => {
        const data = await TaskService.storeTask(req.body);
        res.json({
            data: data,
            message: 'Store task successfully!'
        });
    },
    updateTask: async(req, res) => {
        const data = await TaskService.updateTask(req.params.id, req.body);
        res.json({
            data: data,
            message: 'Update task successfully!'
        });
    },
    deleteTask: async(req, res) => {
        const data = await TaskService.deleteTask(req.params.id);
        res.json({
            //data: data,
            message: 'Deleted task successfully!'
        });

    }
}