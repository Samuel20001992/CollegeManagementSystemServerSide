import express from 'express';

import { getAttendances, getAttendance, createAttendance, updateAttendance, deleteAttendance, getOneAttendance, getSearchAll } from '../controllers/attendance.controller.js';

const router = express.Router();

router.get('/', getAttendances);
router.post('/', createAttendance);
router.get('/:section/:course_code/:day/:month/:academic_year', getOneAttendance);
router.get('/:start_day/:start_month/:start_year/:end_day/:end_month/:end_year', getSearchAll);
router.patch('/:id', updateAttendance);
router.delete('/:id', deleteAttendance);


export default router;