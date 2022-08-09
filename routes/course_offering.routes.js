import express from 'express';

import { getCourse_Offerings, getCourse_Offering, createCourse_Offering, updateCourse_Offering, deleteCourse_Offering, getOneCourseOffering } from '../controllers/course_offering.controller.js';

const router = express.Router();

router.get('/', getCourse_Offerings);
router.post('/', createCourse_Offering);
router.get('/:course_offering_id', getOneCourseOffering);
router.patch('/:id', updateCourse_Offering);
router.delete('/:id', deleteCourse_Offering);


export default router;