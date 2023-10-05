const ProjectService = require('../services/project.service');
const response = require('../utils/response')

class ProjectController {
  async create(req, res) {
    try {
      const result = await ProjectService.create(req.body);
      res.status(201).send(response.success(`Project created: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Error creating project: ${JSON.stringify(err)}`));
    }
  }

  async getAll(req, res) {
    try {
      const result = await ProjectService.getAll();
      res.status(200).send(response.success(`All projects: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Error getting all Project: ${JSON.stringify(err)}`));
    }
  }

  async getOne(req, res) {
    try {
      const result = await ProjectService.getOne(req.params.projectId);
      res.status(200).send(response.success(`Project data: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Error getting data: ${JSON.stringify(err)}`));
    }
  }

  async update(req, res) {
    try {
      const result = await ProjectService.update(req.params.projectId, req.body);
      res.status(200).send(response.success(`Project updated: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Error updating Project: ${JSON.stringify(err)}`));
    }
  }

  async delete(req, res) {
    try {
      const result = await ProjectService.delete(req.params.projectId);
      res.status(204).send(response.success(`Project deleted: ${JSON.stringify(result)}`));
    } catch (err) {
      res.status(500).send(response.error(`Project deleted error: ${JSON.stringify(err)}`));
    }
  }
}

module.exports = new ProjectController;