const User = require('../models/user.model');
const CustomError = require('../utils/customError');

class UserService {
    async create(data) {
        try {
            return await new User(data).save();
        } catch(err){
            throw new CustomError(`User service error creating data`, 500)
        }
    }

    async getAll() {
        try {
            return await User.find({}, { password: 0, __v: 0 });
        } catch(err){
            throw new CustomError(`User service error fetching data`, 500)
        }
    }

    async getOne(userId) {
        try {
            const user = await User.findOne({ _id: userId }, { password: 0, __v: 0 });
            if (!user) throw new CustomError("User does not exist")

            return user;
        } catch(err){
            throw new CustomError(`User service error fetching single data`, 500)
        }
    }

    async update(userId, data) {
        try {
            const user = await User.findByIdAndUpdate(
                { _id: userId },
                { $set: data },
                { new: true }
            );
            if (!user) throw new CustomError("User doesn't exist", 400);

            return user;
        } catch(err){
            throw new CustomError(`User service error updating data`, 500)
        }
    }

    async delete(userId) {
        try {
            const user = await User.deleteOne({ _id: userId });
            if (!user) throw new CustomError("User does not exist")
            user.isActive = false;
            return user;
        } catch(err){
            throw new CustomError(`User service error deleting data`, 500)
        }
    }
}

module.exports = new UserService();