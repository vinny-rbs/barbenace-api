import express from 'express'
import { prisma } from '@/config/prisma.js';

const router = express.Router();

router.get('/allEmployee', async (req, res) => {
    try {
        const allEmployee = await prisma.employee.findMany();
        res.json(allEmployee);
    } catch (error) {
        res.json({menssage: `Server error:${error}`});
    }
});

export default router