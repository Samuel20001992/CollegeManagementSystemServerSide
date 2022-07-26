import express from 'express';

import { getCourse_Registrations, getCourse_Registration, createCourse_Registration, updateCourse_Registration, deleteCourse_Registration, getOneCourse } from '../controllers/course_registration.controller.js';

const router = express.Router();

router.get('/', getCourse_Registrations);
router.post('/', createCourse_Registration);
router.get('/:course_id', getOneCourse);
router.patch('/:id', updateCourse_Registration);
router.delete('/:id', deleteCourse_Registration);


export default router;