// Route for the app

import express from 'express';

import { getHomepage, createMemo } from '../controllers/homepage.js'

const router = express.Router();

router.get('/', getHomepage)
router.post('/', createMemo)

export default router;