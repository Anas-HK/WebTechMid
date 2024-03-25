import express from 'express'
const router = express.Router();
import { db } from "../models/index.js"

router.get('/students', async (req, res) => {
    const students = await db.Student.find();
    res.status(200).json( students);
});

// Route for fetching grades data
router.get('/grades', async (req, res) => {
    const grades = await db.Grade.find();
    res.status(200).json(grades);
});

// Route for fetching heads data
router.get('/heads', async (req, res) => {
    const heads = await db.Head.find();
    res.status(200).json(heads);
});

// Route for fetching marks data
router.get('/marks', async (req, res) => {
    const marks = await db.Mark.find();
    res.status(200).json(marks);
});


export default router;