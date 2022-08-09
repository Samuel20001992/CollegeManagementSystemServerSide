import express from 'express';

import { getAcademic_Calanders, getAcademic_Calander, createAcademic_Calander, updateAcademic_Calander, deleteAcademic_Calander, getOneAcademicCalander } from '../controllers/academic_calander.controller.js';

const router = express.Router();

router.get('/', getAcademic_Calanders);
router.post('/', createAcademic_Calander);
router.get('/:academic_calander_id', getOneAcademicCalander);
router.patch('/:id', updateAcademic_Calander);
router.delete('/:id', deleteAcademic_Calander);


export default router;