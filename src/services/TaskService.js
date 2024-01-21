const Task = require('../models/TaskModel');

module.exports = {
    getTasks: async() => {
        return await Task.find();
    },
    showIdTask: async(id) => {
        return await Task.findById(id);
    },
    storeTask: async(data) => {
        return await Task.createOne(data)
    },
    updateTask: async(id) => {
        return await Task.findByIdAndUpdate(id, data);
    },
    deleteTask: async(id) => {
        return await Task.findByIdAndDelete(id);
    }
}