const Payroll = require('../models/payroll.model');
const CustomError = require('../utils/customError');

class PayrollService {
    async create(data) {
        try {
            return await new Payroll(data).save();
        } catch (err) {
            throw new CustomError(`Payroll service error creating data`, 500)
        }
    }

    async getAll() {
        try {
            return await Payroll.find();
        } catch (err) {
            throw new CustomError(`Payroll service error fetching all data`, 500)
        }
    }

    async getOne(payrollId) {
        try {
            const payroll = await Payroll.findOne({ _id: payrollId });
            if (!payroll) throw new CustomError("Payroll does not exist")

            return payroll;
        } catch (err) {
            throw new CustomError(`Payroll service error fetching single data`, 500)
        }
    }

    async update(payrollId, data) {
        try {
            const payroll = await Payroll.findByIdAndUpdate(
                { _id: payrollId },
                { $set: data },
                { new: true }
            );
            if (!payroll) throw new CustomError("Payroll doesn't exist", 400);

            return payroll;
        } catch (err) {
            throw new CustomError(`Payroll service error updating data`, 500)
        }
    }

    async delete(payrollId) {
        try {
            const payroll = await Payroll.deleteOne({ _id: payrollId });
            if (!payroll) throw new CustomError("Payroll does not exist")
            return payroll;
        } catch (err) {
            throw new CustomError(`Payroll service error deleting data`, 500)
        }
    }
}

module.exports = new PayrollService();