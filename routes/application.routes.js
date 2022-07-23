import express from 'express';

import { getApplications, getApplication, createApplication, updateApplication, deleteApplication } from '../controllers/application.controller.js';

const router = express.Router();

router.get('/', getApplications);
router.post('/', createApplication);
router.get('/:id', getApplication);
router.patch('/:id', updateApplication);
router.delete('/:id', deleteApplication);


export default router;