import express from 'express';

import { getImages, getImage, createImage, updateImage, deleteImage } from './image.controller.js';

const router = express.Router();

router.get('/', getImages);
router.post('/', createImage);
router.get('/:id', getImage);
router.patch('/:id', updateImage);
router.delete('/:id', deleteImage);


export default router;