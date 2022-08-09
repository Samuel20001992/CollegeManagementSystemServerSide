import express from 'express';

import { getCourse_Designs, getCourse_Design, createCourse_Design, updateCourse_Design, deleteCourse_Design, getOneCourseDesign } from '../controllers/course_design.controller.js';

const router = express.Router();

router.get('/', getCourse_Designs);
router.post('/', createCourse_Design);
router.get('/:course_design_id', getOneCourseDesign);
router.patch('/:id', updateCourse_Design);
router.delete('/:id', deleteCourse_Design);


export default router;