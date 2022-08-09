import express from 'express';

import { getAdds, getAdd, createAdd, updateAdd, deleteAdd, getOneAdd } from '../controllers/add.controller.js';

const router = express.Router();

router.get('/', getAdds);
router.post('/', createAdd);
router.get('/:add_id', getOneAdd);
router.patch('/:id', updateAdd);
router.delete('/:id', deleteAdd);


export default router;