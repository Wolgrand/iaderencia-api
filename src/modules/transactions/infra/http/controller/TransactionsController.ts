import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { format } from 'date-fns';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';
import FindTransactionService from '@modules/transactions/services/FindTransactionService';
import { classToClass } from 'class-transformer';

export default class TransactionController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const findTransaction = container.resolve(FindTransactionService);

    const transaction = await findTransaction.execute({
      user_id,
    });

    /*     if (transaction) {
      const transactions = Object.assign(
        transaction?.map(item => item.transaction_criterias[0].created_at),
      );} */

    return response.json(classToClass(transaction));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, criterias, newScore } = request.body;

    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({
      user_id,
      criterias,
      newScore,
    });

    return response.json(transaction);
  }
}
