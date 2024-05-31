import refreshToken from '@server-middlewares/refreshToken';
import { Router } from 'express';

const router = Router();

router.get('/refresh', refreshToken);

export default router;
