import express from 'express';

import { getStudents, getStudent, createStudent, updateStudent, deleteStudent } from '../controllers/student.controller.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);


export default router;