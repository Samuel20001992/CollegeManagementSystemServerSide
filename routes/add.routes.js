import express from 'express';

import { getAdds, getAdd, createAdd, updateAdd, deleteAdd } from '../controllers/add.controller.js';

const router = express.Router();

router.get('/', getAdds);
router.post('/', createAdd);
router.get('/:id', getAdd);
router.patch('/:id', updateAdd);
router.delete('/:id', deleteAdd);


export default router;