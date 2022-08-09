import express from 'express';

import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment, getOneDepartment } from '../controllers/department.controller.js';

const router = express.Router();

router.get('/', getDepartments);
router.post('/', createDepartment);
router.get('/:department_id', getOneDepartment);
router.patch('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);


export default router;