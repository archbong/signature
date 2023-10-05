const UserService = require('../services/user.service');
const response = require('../utils/response')

class UserController {
  async create(req, res) {
    try {
      const result = await UserService.create(req.body);
      res.status(201).send(response.success(`User created: ${JSON.stringify(result)}`));
    } catch(err) {
      res.status(500).send(response.error(`User controller error creating data: ${JSON.stringify(err)}`));
    }
  }

  async getAll(req, res) {
    try {
      const result = await UserService.getAll();
      res.status(200).send(response.success(`All users fetched: ${result.toString()}`));
    } catch(err) {
      res.status(500).send(response.error(`User controller error fetching all users: ${JSON.stringify(err)}`));
    }
  }

  async getOne(req, res) {
    try {
      const result = await UserService.getOne(req.params.userId);
      res.status(200).send(response.success(`Fetched single user data: ${JSON.stringify(result)}`));
    } catch(err) {
      res.status(200).send(response.error(`User controller error fetching a single data: ${JSON.stringify(err)}`));
    }
  }

  async update(req, res) {
    try {
      const result = await UserService.update(req.params.userId, req.body);
      res.status(201).send(response.success(`User updated: ${JSON.stringify(result)}`));
    } catch(err) {
      res.status(500).send(response.error(`User controller error updating data: ${JSON.stringify(err)}`));
    }
  }

  async delete(req, res) {
    try {
      const result = await UserService.delete(req.params.userId);
      res.status(204).send(response.success(`User deleted: ${JSON.stringify(result)}`));
    } catch(err) {
      res.status(500).send(response.error(`User controller error deleting data: ${JSON.stringify(err)}`));
    }
  }
}

module.exports = new UserController;