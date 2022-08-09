import express from 'express';

import { getCurriculums, getCurriculum, createCurriculum, updateCurriculum, deleteCurriculum, getOneCurriculum } from '../controllers/curriculum.controller.js';

const router = express.Router();

router.get('/', getCurriculums);
router.post('/', createCurriculum);
router.get('/:curriculum_id', getOneCurriculum);
router.patch('/:id', updateCurriculum);
router.delete('/:id', deleteCurriculum);


export default router;