import express from 'express';

import { getSemester_Grades, getSemester_Grade, createSemester_Grade, updateSemester_Grade, deleteSemester_Grade, getOneSemesterGrade } from '../controllers/semester_grade.controller.js';

const router = express.Router();

router.get('/', getSemester_Grades);
router.post('/', createSemester_Grade);
router.get('/:semester_grade_id', getOneSemesterGrade);
router.patch('/:id', updateSemester_Grade);
router.delete('/:id', deleteSemester_Grade);
// router.get('/:attendance_year/:semester/:student_id', getOneSemester_Grade);

export default router;