import express from 'express';

import { getWithdrawals, getWithdrawal, createWithdrawal, updateWithdrawal, deleteWithdrawal, getOneWithdraw } from '../controllers/withdrawal.controller.js';

const router = express.Router();

router.get('/', getWithdrawals);
router.post('/', createWithdrawal);
router.get('/:withdraw_id', getOneWithdraw);
router.patch('/:id', updateWithdrawal);
router.delete('/:id', deleteWithdrawal);


export default router;