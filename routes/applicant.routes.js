import express from 'express';

import { getApplicants, getApplicant, createApplicant, updateApplicant, deleteApplicant } from '../controllers/applicant.controller.js';

const router = express.Router();

router.get('/', getApplicants);
router.post('/', createApplicant);
router.get('/:id', getApplicant);
router.patch('/:id', updateApplicant);
router.delete('/:id', deleteApplicant);


export default router;