import { Router } from 'express';

import employeeRouter from './employeeRouter.js';

const router = Router();

router.use('/employees', employeeRouter);

export default router;