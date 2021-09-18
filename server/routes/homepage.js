// Route for the app

import express from 'express';

import { getMemo, createMemo } from '../controllers/homepage.js'

const router = express.Router();

router.get('/', getMemo)
router.post('/', createMemo)

export default router;