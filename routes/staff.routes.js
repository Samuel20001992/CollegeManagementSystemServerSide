import express from 'express';

import { getStaffs, getStaff, createStaff, updateStaff, deleteStaff } from '../controllers/staff.controller.js';

const router = express.Router();

router.get('/', getStaffs);
router.post('/', createStaff);
router.get('/:id', getStaff);
router.patch('/:id', updateStaff);
router.delete('/:id', deleteStaff);


export default router;