import express from 'express';

import { getClearances, getClearance, createClearance, updateClearance, deleteClearance, getOneClearance } from '../controllers/clearance.controller.js';

const router = express.Router();

router.get('/', getClearances);
router.post('/', createClearance);
router.get('/:clearance_id', getOneClearance);
router.patch('/:id', updateClearance);
router.delete('/:id', deleteClearance);


export default router;