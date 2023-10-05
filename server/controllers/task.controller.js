const TaskService = require('../services/task.service');
const response = require('../utils/response')

class TaskController {
  async create(req, res) {
    try {
      const result = await TaskService.create(req.body);
      res.status(201).send(response.success(`Task created: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Task created error: ${JSON.stringify(err)}`));
    }
  }

  async getAll(req, res) {
    try {
      const result = await TaskService.getAll();
      res.status(200).send(response.success(`All tasks: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Error getting all task: ${JSON.stringify(err)}`));
    }
  }

  async getOne(req, res) {
    try {
      const result = await TaskService.getOne(req.params.taskId);
      res.status(200).send(response.success(`Single task data: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Single task data error: ${JSON.stringify(err)}`));
    }
  }

  async update(req, res) {
    try {
      const result = await TaskService.update(req.params.taskId, req.body);
      res.status(200).send(response.success(`Task updated: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Task updated error: ${JSON.stringify(err)}`));
    }
  }

  async delete(req, res) {
    try {
      const result = await TaskService.delete(req.params.taskId);
      res.status(204).send(response.success(`Task deleted: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Task deleted error: ${JSON.stringify(err)}`));
    }
  }
}

module.exports = new TaskController;