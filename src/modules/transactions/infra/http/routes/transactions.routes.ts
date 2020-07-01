import { Router } from 'express';

import TransactionsController from '../controller/TransactionsController';

const transactionsRouter = Router();
const transactionController = new TransactionsController();

transactionsRouter.post('/', transactionController.create);
transactionsRouter.get('/:user_id', transactionController.show);

export default transactionsRouter;
