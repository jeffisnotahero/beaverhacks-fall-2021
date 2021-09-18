// Route for the app

import express from 'express';

import { getHomepage, createMemo } from '../controllers/homepage.js'

const router = express.Router();

//  Hompage route, http://localhost:5000/homepage
router.get('/', getHomepage)
router.post('/create-memo', createMemo)

export default router;