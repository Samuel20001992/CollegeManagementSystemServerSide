import express from 'express';

import { getCourse_Breakdowns, getCourse_Breakdown, createCourse_Breakdown, updateCourse_Breakdown, deleteCourse_Breakdown } from '../controllers/course_breakdown.controller.js';

const router = express.Router();

router.get('/', getCourse_Breakdowns);
router.post('/', createCourse_Breakdown);
router.get('/:id', getCourse_Breakdown);
router.patch('/:id', updateCourse_Breakdown);
router.delete('/:id', deleteCourse_Breakdown);


export default router;