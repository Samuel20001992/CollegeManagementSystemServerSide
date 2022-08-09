import express from 'express';
import { getOneDepartment } from '../controllers/department.controller.js';

import { getDrops, getDrop, createDrop, updateDrop, deleteDrop, getOneDrop } from '../controllers/drop.controller.js';

const router = express.Router();

router.get('/', getDrops);
router.post('/', createDrop);
router.get('/:drop_id', getOneDrop);
router.patch('/:id', updateDrop);
router.delete('/:id', deleteDrop);


export default router;