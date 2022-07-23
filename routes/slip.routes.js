import express from 'express';

import { getSlips, getSlip, createSlip, updateSlip, deleteSlip, getOneSlip } from '../controllers/slip.controller.js';

const router = express.Router();

router.get('/', getSlips);
router.post('/', createSlip);
router.get('/:id', getSlip);
router.patch('/:id', updateSlip);
router.delete('/:id', deleteSlip);
router.get('/:attendance_year/:semester/:student_id', getOneSlip);

export default router;