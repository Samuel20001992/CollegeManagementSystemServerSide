import express from 'express';

import { getDrops, getDrop, createDrop, updateDrop, deleteDrop } from '../controllers/drop.controller.js';

const router = express.Router();

router.get('/', getDrops);
router.post('/', createDrop);
router.get('/:id', getDrop);
router.patch('/:id', updateDrop);
router.delete('/:id', deleteDrop);


export default router;