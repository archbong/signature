const Project = require('../models/project.model');
const CustomError = require('../utils/customError');

class ProjectService {
    async create(data) {
        try {
            return await new Project(data).save();
        } catch (err) {
            throw new CustomError(`Project service error creating data`, 500)
        }
    }

    async getAll() {
        try {
            return await Project.find();
        } catch (err) {
            throw new CustomError(`Project service error fetching all data`, 500)
        }
    }

    async getOne(projectId) {
        try {
            const project = await Project.findOne({ _id: projectId });
            if (!project) throw new CustomError("Project does not exist")

            return project;
        } catch (err) {
            throw new CustomError(`Project service error fetching single data`, 500)
        }
    }

    async update(projectId, data) {
        try {
            const project = await Project.findByIdAndUpdate(
                { _id: projectId },
                { $set: data },
                { new: true }
            );
            if (!project) throw new CustomError("Project doesn't exist", 400);

            return project;
        } catch (err) {
            throw new CustomError(`Project service error updating data`, 500);
        }
    }

    async delete(projectId) {
        try {
            const project = await Project.deleteOne({ _id: projectId });
            if (!project) throw new CustomError("Project does not exist")
            return project;
        } catch (err) {
            throw new CustomError(`Project service error deleting data`, 500);
        }
    }
}

module.exports = new ProjectService();