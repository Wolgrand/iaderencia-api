import { Router } from 'express';

import PlayerController from '../controllers/PlayerController';

const playerRouter = Router();
const playerController = new PlayerController();

playerRouter.get('/:user_id', playerController.index);

export default playerRouter;
