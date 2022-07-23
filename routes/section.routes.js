import express from 'express';

import { getSections, getSection, createSection, updateSection, deleteSection } from '../controllers/section.controller.js';

const router = express.Router();

router.get('/', getSections);
router.post('/', createSection);
router.get('/:id', getSection);
router.patch('/:id', updateSection);
router.delete('/:id', deleteSection);


export default router;