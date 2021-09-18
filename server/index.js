// index.js, starting point of our server application

// Dependencies
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import homepageRoutes from './routes/homepage.js';

// Initialize app
const app = express();
dotenv.config();

// To enable sending request
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Express middleware to connect routes to application
app.use('/', homepageRoutes);

// Mongo Database setup with enviroment variable
// https://www.mongodb.com/cloud/atlas
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

