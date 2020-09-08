import { Router } from 'express';

import RewardsController from '../controller/RewardsController';

const rewardsRouter = Router();
const rewardsController = new RewardsController();

rewardsRouter.post('/', rewardsController.create);
rewardsRouter.delete('/:id', rewardsController.delete);
rewardsRouter.put('/:id', rewardsController.update);
rewardsRouter.get('/', rewardsController.show);

export default rewardsRouter;
