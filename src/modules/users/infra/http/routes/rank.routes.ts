import { Router } from 'express';

import RankController from '../controllers/RankController';

const rankRouter = Router();
const rankController = new RankController();

rankRouter.get('/', rankController.show);

export default rankRouter;
