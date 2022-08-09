import express from 'express';

import { getStudent_Details, getStudent_Detail, createStudent_Detail, updateStudent_Detail, deleteStudent_Detail } from '../controllers/student_detail.controller.js';

const router = express.Router();

router.get('/', getStudent_Details);
router.post('/', createStudent_Detail);
router.get('/:student_id', getStudent_Detail);
router.patch('/:id', updateStudent_Detail);
router.delete('/:id', deleteStudent_Detail);


export default router;