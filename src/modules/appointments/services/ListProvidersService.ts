import { injectable, inject } from 'tsyringe';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User | undefined> {
    /*     let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`,
    ); */

    const user = await this.usersRepository.findById(user_id);

    return user;
  }
}

export default ListProvidersService;
