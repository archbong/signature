const TimeTracker = require('../models/timeTracker.model');
const CustomError = require('../utils/customError');

class TimeTrackerService {
    async create(data) {
        try {
            return await new TimeTracker(data).save();
        } catch (err) {
            throw new CustomError(`Time service error creating data`, 500)
        }
    }

    async getAll() {
        try {
            return await TimeTracker.find();
        } catch (err) {
            throw new CustomError(`Time service error fetching all data`, 500)
        }
    }

    async getOne(timeTrackerId) {
        try {
            const timetracker = await TimeTracker.findOne({ _id: timeTrackerId });
            if (!timetracker) throw new CustomError("TimeTracker does not exist")

            return timetracker;
        } catch (err) {
            throw new CustomError(`Time service error fetching single data`, 500)
        }
    }

    async update(timeTrackerId, data) {
        try {
            const timetracker = await TimeTracker.findByIdAndUpdate(
                { _id: timeTrackerId },
                { $set: data },
                { new: true }
            );
            if (!timetracker) throw new CustomError("TimeTracker doesn't exist", 400);

            return timetracker;
        } catch (err) {
            throw new CustomError(`Time service error updating data`, 500)
        }
    }

    async delete(timeTrackerId) {
        try {
            const timetracker = await TimeTracker.deleteOne({ _id: timeTrackerId });
            if (!timetracker) throw new CustomError("TimeTracker does not exist")
            return timetracker;
        } catch (err) {
            throw new CustomError(`Time service error deleting data`, 500)
        }
    }
}

module.exports = new TimeTrackerService();