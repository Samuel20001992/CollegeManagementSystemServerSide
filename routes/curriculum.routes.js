import express from 'express';

import { getCurriculums, getCurriculum, createCurriculum, updateCurriculum, deleteCurriculum } from '../controllers/curriculum.controller.js';

const router = express.Router();

router.get('/', getCurriculums);
router.post('/', createCurriculum);
router.get('/:id', getCurriculum);
router.patch('/:id', updateCurriculum);
router.delete('/:id', deleteCurriculum);


export default router;