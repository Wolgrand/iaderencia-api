import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';
import FindTransactionService from '@modules/transactions/services/FindTransactionService';

export default class TransactionController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findTransaction = container.resolve(FindTransactionService);

    const transaction = await findTransaction.execute({
      id,
    });

    return response.json(transaction);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, criterias } = request.body;

    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({
      user_id,
      criterias,
    });

    return response.json(transaction);
  }
}
