import { Router } from 'express';

import TopDepartmentController from '../controllers/TopDepartmentController';

const topDepartmentRouter = Router();
const topDepController = new TopDepartmentController();

topDepartmentRouter.get('/', topDepController.show);

export default topDepartmentRouter;
