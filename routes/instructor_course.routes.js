import express from 'express';

import { getInstructor_Courses, getInstructor_Course, createInstructor_Course, updateInstructor_Course, deleteInstructor_Course } from '../controllers/instructor_course.controller.js';

const router = express.Router();

router.get('/', getInstructor_Courses);
router.post('/', createInstructor_Course);
router.get('/:id', getInstructor_Course);
router.patch('/:id', updateInstructor_Course);
router.delete('/:id', deleteInstructor_Course);


export default router;