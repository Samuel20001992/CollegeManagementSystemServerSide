import express from 'express';

import { getApplicants, getApplicant, createApplicant, updateApplicant, deleteApplicant, getOneApplicant } from '../controllers/applicant.controller.js';

const router = express.Router();

router.get('/', getApplicants);
router.post('/', createApplicant);
router.get('/:applicant_id', getOneApplicant);
router.patch('/:id', updateApplicant);
router.delete('/:id', deleteApplicant);


export default router;