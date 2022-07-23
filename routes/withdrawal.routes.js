import express from 'express';

import { getWithdrawals, getWithdrawal, createWithdrawal, updateWithdrawal, deleteWithdrawal } from '../controllers/withdrawal.controller.js';

const router = express.Router();

router.get('/', getWithdrawals);
router.post('/', createWithdrawal);
router.get('/:id', getWithdrawal);
router.patch('/:id', updateWithdrawal);
router.delete('/:id', deleteWithdrawal);


export default router;