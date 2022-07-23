import express from 'express';

import { getCourse_Offerings, getCourse_Offering, createCourse_Offering, updateCourse_Offering, deleteCourse_Offering } from '../controllers/course_offering.controller.js';

const router = express.Router();

router.get('/', getCourse_Offerings);
router.post('/', createCourse_Offering);
router.get('/:id', getCourse_Offering);
router.patch('/:id', updateCourse_Offering);
router.delete('/:id', deleteCourse_Offering);


export default router;