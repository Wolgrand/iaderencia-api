import { Router } from 'express';

import TransactionsRewardsController from '../controller/TransactionsRewardsController';

const transactionsRewardsRouter = Router();
const transactionController = new TransactionsRewardsController();

transactionsRewardsRouter.post('/', transactionController.create);
transactionsRewardsRouter.get('/:user_id', transactionController.show);
transactionsRewardsRouter.delete('/:id', transactionController.delete);
transactionsRewardsRouter.get('/', transactionController.index);

export default transactionsRewardsRouter;
