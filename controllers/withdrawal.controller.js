import express from 'express';
import mongoose from 'mongoose';

import WithdrawalModel from '../models/withdrawal.model.js';

const router = express.Router();

export const getWithdrawals = async (req, res) => { 
    try {
        const withdrawalModels = await WithdrawalModel.find();
                
       return res.status(200).json(withdrawalModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getWithdrawal = async (req, res) => { 
    const { id } = req.params;

    try {
        const withdrawal = await WithdrawalModel.findById(id);
        
       return res.status(200).json(withdrawal);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createWithdrawal = async (req, res) => {
    const withdrawalModels = await WithdrawalModel.find();
    const withdrawal_id = withdrawalModels.length + 1;

    const {student_id, date, reason,phone, letter, remark } = req.body;
 
    const newWithdrawalModel = new WithdrawalModel({withdrawal_id, student_id, date, reason,phone, letter, remark})
     
    try {
        await newWithdrawalModel.save();

       return res.status(201).json(newWithdrawalModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateWithdrawal = async (req, res) => {
    const { id } = req.params;
    const {withdrawal_id, student_id, date, reason,phone, letter, remark} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No withdrawal with id: ${id}`);

    const updatedWithdrawal = {withdrawal_id,student_id, date, reason,phone, letter, remark, _id: id };

    await WithdrawalModel.findByIdAndUpdate(id, updatedWithdrawal, { new: true });

    return res.json(updatedWithdrawal);
}

export const deleteWithdrawal = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No withdrawal with id: ${id}`);

    await WithdrawalModel.findByIdAndRemove(id);

    return res.json({ message: "Withdrawal deleted successfully." });
}



export default router;