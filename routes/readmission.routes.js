import express from 'express';

import { getReadmissions, getReadmission, createReadmission, updateReadmission, deleteReadmission, getOneReadmission } from '../controllers/readmission.controller.js';

const router = express.Router();

router.get('/', getReadmissions);
router.post('/', createReadmission);
router.get('/:readmission_id', getOneReadmission);
router.patch('/:id', updateReadmission);
router.delete('/:id', deleteReadmission);


export default router;