const PayrollService = require('../services/payroll.service');
const response = require('../utils/response')

class PayrollController {
  async create(req, res) {
    const result = await PayrollService.create(req.body);
    res.status(201).send(response.success(`Project created: ${JSON.stringify(result)}`));
  }

  async getAll(req, res) {
    const result = await PayrollService.getAll();
    res.status(200).send(response.success(`All projects: ${JSON.stringify(result)}`));
  }

  async getOne(req, res) {
    const result = await PayrollService.getOne(req.params.projectId);
    res.status(200).send(response.success(`Project data: ${JSON.stringify(result)}`));
  }

  async update(req, res) {
    const result = await PayrollService.update(req.params.projectId, req.body);
    res.status(200).send(response.success(`Project updated: ${JSON.stringify(result)}`));
  }

  async delete(req, res) {
    const result = await PayrollService.delete(req.params.projectId);
    res.status(204).send(response.success(`Project deleted: ${JSON.stringify(result)}`));
  }
}

module.exports = new PayrollController;