import express from 'express';

import { getClearances, getClearance, createClearance, updateClearance, deleteClearance } from '../controllers/clearance.controller.js';

const router = express.Router();

router.get('/', getClearances);
router.post('/', createClearance);
router.get('/:id', getClearance);
router.patch('/:id', updateClearance);
router.delete('/:id', deleteClearance);


export default router;