const Task = require('../models/task.model');
const CustomError = require('../utils/customError');

class TaskService {
    async create(data) {
        try {
            const newTask = await new Task(data).save();
            return newTask;
        } catch(err) {
            throw new CustomError(`Error creating task: ${err}`, 500);
        }
    }

    async getAll() {
        try {
            const allTask = await Task.find();
            return allTask;
        } catch(err) {
            throw new CustomError(`Error creating task: ${err}`, 500);
        }
    }

    async getOne(taskId) {
        try {
            const task = await Task.findOne({ _id: taskId });
            if (!task) throw new CustomError("Task does not exist")
            return task;
        } catch {
            throw new CustomError(`Error creating task: ${err}`, 500);
        }
    }

    async update(taskId, data) {
        try {
            const task = await Task.findByIdAndUpdate(
                { _id: taskId },
                { $set: data },
                { new: true }
            );
            if (!task) throw new CustomError("Task doesn't exist", 400);
            return task;
        } catch(err) {
            throw new CustomError(`Error creating task: ${err}`, 500);
        }
    }

    async delete(taskId) {
        try {
            const task = await Task.deleteOne({ _id: taskId });
            if (!task) throw new CustomError("Task does not exist")
            return task;
        } catch(err){
            throw new CustomError(`Error creating task: ${err}`, 500);
        }
        
    }
}

module.exports = new TaskService();