const Task = require('../models/TaskModel');

module.exports = {
    getTasks: async() => {
        return await Task.find();
    },
    getTaskById: async(id) => {
        return await Task.findById(id);
    },
    storeTask: async(data) => {
        return await Task.create(data)
    },
    updateTask: async(id, data) => {
        return await Task.findByIdAndUpdate(id, data);
    },
    deleteTask: async(id) => {
        return await Task.findByIdAndDelete(id);
    }
}