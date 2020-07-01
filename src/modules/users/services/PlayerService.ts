import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  role: string;
  score: number;
}

@injectable()
class PlayerService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute(user_id: string): Promise<User | undefined> {
    const player = await this.usersRepository.findById(user_id);

    return player;
  }
}

export default PlayerService;
