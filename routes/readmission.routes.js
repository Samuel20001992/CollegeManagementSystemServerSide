import express from 'express';

import { getReadmissions, getReadmission, createReadmission, updateReadmission, deleteReadmission } from '../controllers/readmission.controller.js';

const router = express.Router();

router.get('/', getReadmissions);
router.post('/', createReadmission);
router.get('/:id', getReadmission);
router.patch('/:id', updateReadmission);
router.delete('/:id', deleteReadmission);


export default router;