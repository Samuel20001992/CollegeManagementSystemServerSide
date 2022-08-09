import express from 'express';

import { getStudent_Sections, getStudent_Section, createStudent_Section, updateStudent_Section, deleteStudent_Section, getOneStudent_Section } from '../controllers/student_section.controller.js';

const router = express.Router();

router.get('/', getStudent_Sections);
router.post('/', createStudent_Section);
router.get('/:section_name', getOneStudent_Section);
router.patch('/:id', updateStudent_Section);
router.delete('/:id', deleteStudent_Section);


export default router;