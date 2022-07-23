import express from 'express';
import mongoose from 'mongoose';

import TotalsModel from '../models/totals.model.js';

const router = express.Router();

export const getTotals = async (req, res) => { 
    try {
        const totalsModels = await TotalsModel.find();
                
       return res.status(200).json(totalsModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getTotal = async (req, res) => { 
    const { id } = req.params;

    try {
        const totals = await TotalsModel.findById(id);
        
       return res.status(200).json(totals);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createTotal = async (req, res) => {
    const totalsModels = await TotalsModel.find();
    const totals_id = totalsModels.length + 1;
    const {
    student_id,
    total_credit,
        total_point,
        total_mpa_point,
    total_mpa_credit
    } = req.body;
 
    const newTotalsModel = new TotalsModel({
        totals_id,
    student_id,
    total_credit,
        total_point,
    total_mpa_point,
    total_mpa_credit})
     
    try {
        await newTotalsModel.save();

       return res.status(201).json(newTotalsModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateTotal = async (req, res) => {
    const { id } = req.params;
    const {
        totals_id,
    student_id,
    total_credit,
        total_point,
total_mpa_point,
    total_mpa_credit    } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No totals with id: ${id}`);

    const updatedTotals = {
    totals_id,
    student_id,
    total_credit,
        total_point,
        total_mpa_point,
        total_mpa_credit
        , _id: id
    };

    await TotalsModel.findByIdAndUpdate(id, updatedTotals, { new: true });

    return res.json(updatedTotals);
}

export const deleteTotal = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No totals with id: ${id}`);

    await TotalsModel.findByIdAndRemove(id);

    return res.json({ message: "Totals deleted successfully." });
}

export const getTotalByStudentId = async (req, res) => { 
    const {student_id } = req.params;
    console.log("fa " + student_id);
    const {
        totals_id,
        total_credit,
        total_point,
        total_mpa_point,
        total_mpa_credit
    } = "0";

    const newTotalsModel = new TotalsModel({
        totals_id,
        student_id,
        total_credit,
        total_point,
        total_mpa_point,
        total_mpa_credit
    });

    try {
        const data = await TotalsModel.find(
      {
        "student_id": student_id ,
      }
    );
        console.log("hello")
       return res.status(200).json(data);
    } catch (error) {
        console.log("yello")
        console.log(error);
       return res.status(404).json({ message: error.message });
    }
}

export default router;