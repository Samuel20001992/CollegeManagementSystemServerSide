import express from 'express';

import { getStudent_Course_Registrations, getStudent_Course_Registration, createStudent_Course_Registration, updateStudent_Course_Registration, deleteStudent_Course_Registration, getOneStudent} from '../controllers/student_course_registration.controller.js';

const router = express.Router();

router.get('/', getStudent_Course_Registrations);
router.post('/', createStudent_Course_Registration);
router.get('/:id', getStudent_Course_Registration);
router.patch('/:id', updateStudent_Course_Registration);
router.delete('/:id', deleteStudent_Course_Registration);
router.get('/:attendance_year/:semester/:student_id', getOneStudent);

export default router;