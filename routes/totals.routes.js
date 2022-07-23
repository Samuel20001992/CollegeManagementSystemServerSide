import express from 'express';

import { getTotals, createTotal, updateTotal, deleteTotal, getTotalByStudentId } from '../controllers/totals.controller.js';

const router = express.Router();

router.get('/', getTotals);
router.post('/', createTotal);
router.patch('/:id', updateTotal);
router.delete('/:id', deleteTotal);
router.get('/:student_id', getTotalByStudentId);


export default router;