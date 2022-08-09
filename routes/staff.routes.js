import express from 'express';

import { getStaffs, getStaff, createStaff, updateStaff, deleteStaff, getOneStaff } from '../controllers/staff.controller.js';

const router = express.Router();

router.get('/', getStaffs);
router.post('/', createStaff);
router.get('/:staff_id', getOneStaff);
router.patch('/:id', updateStaff);
router.delete('/:id', deleteStaff);


export default router;