import { Router } from 'express';

import CriteriasController from '../controller/CriteriasController';

const criteriasRouter = Router();
const criteriasController = new CriteriasController();

criteriasRouter.post('/', criteriasController.create);
criteriasRouter.get('/', criteriasController.show);

export default criteriasRouter;
