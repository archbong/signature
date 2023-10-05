const TimetrackerService = require('../services/timetracker.service');
const response = require('../utils/response')

class TimetrackerController {
  async create(req, res) {
    try {
      const result = await TimetrackerService.create(req.body);
    res.status(201).send(response.success(`timetracker created: ${JSON.stringify(result)}`));
    } catch(err) {
      res.status(500).send(response.error(`timetracker created error: ${JSON.stringify(err)}`));
    }
    
  }

  async getAll(req, res) {
    try {
      const result = await TimetrackerService.getAll();
    res.status(200).send(response.success(`All timetrackers: ${result.toString()}`));
    } catch(err) {
      res.status(500).send(response.error(`All timetracker error: ${JSON.stringify(err)}`));
    }
  }

  async getOne(req, res) {
    try {
      const result = await TimetrackerService.getOne(req.params.timetrackerId);
    res.status(200).send(response.success(`timetracker data: ${JSON.stringify(result)}`));
    } catch(err) {
      res.status(500).send(response.error(`timetracker data error: ${JSON.stringify(err)}`));
    }
  }

  async update(req, res) {
   try { const result = await TimetrackerService.update(req.params.timetrackerId, req.body);
    res.status(200).send(response.success(`timetracker updated: ${JSON.stringify(result)}`));
  } catch(err) {
    res.status(500).send(response.error(`timetracker updated error: ${JSON.stringify(err)}`));
   }
  }

  async delete(req, res) {
   try {
     const result = await TimetrackerService.delete(req.params.projectId);
    res.status(204).send(response.success(`timetracker deleted: ${JSON.stringify(result)}`));
   } catch(err) {
    res.status(500).send(response.error(`timetracker deleted error: ${JSON.stringify(err)}`));
   }
  }
}

module.exports = new TimetrackerController;