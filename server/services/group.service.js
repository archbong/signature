const Group = require('../models/group.model');
const CustomError = require('../utils/customError');

class GroupService {
    async create(data) {
        try {
            return await new Group(data).save();
        } catch (err) {
            throw new CustomError(`Group service error creating new group`, 500)
        }
    }

    async getAll() {
        try {
            return await Group.find();
        } catch (err) {
            throw new CustomError(`Group service error fetching all group`, 500)
        }
    }

    async getOne(projectId) {
        try {
            const group = await Group.findOne({ _id: projectId });
            if (!group) throw new CustomError("Group does not exist")

            return group;
        } catch (err) {
            throw new CustomError(`Group service error fetching one`, 500)
        }
    }

    async update(projectId, data) {
        try {
            const group = await Group.findByIdAndUpdate(
                { _id: projectId },
                { $set: data },
                { new: true }
            );
            if (!group) throw new CustomError("Group doesn't exist", 400);

            return group;
        } catch (err) {
            throw new CustomError(`Group service error updating`, 500)
        }
    }

    async delete(projectId) {
        try {
            const group = await Group.deleteOne({ _id: projectId });
            if (!group) throw new CustomError("Group does not exist")
            return group;
        } catch (err) {
            throw new CustomError(`Group service error deleting`, 500)
        }
    }
}

module.exports = new GroupService();