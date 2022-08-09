import express from 'express';

import { getCourse_Breakdowns, getCourse_Breakdown, createCourse_Breakdown, updateCourse_Breakdown, deleteCourse_Breakdown, getOneCourseBreakdown } from '../controllers/course_breakdown.controller.js';

const router = express.Router();

router.get('/', getCourse_Breakdowns);
router.post('/', createCourse_Breakdown);
router.get('/:course_breakdown_id', getOneCourseBreakdown);
router.patch('/:id', updateCourse_Breakdown);
router.delete('/:id', deleteCourse_Breakdown);


export default router;