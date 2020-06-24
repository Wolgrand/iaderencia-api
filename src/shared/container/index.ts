import { container } from 'tsyringe';

import '@modules/users/providers/';
import './providers';

import ICriteriasRepository from '@modules/criterias/repositories/ICriteriasRepository';
import CriteriasRepository from '@modules/criterias/infra/typeorm/repositories/CriteriasRepository';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';
import TransactionsRepository from '@modules/transactions/infra/typeorm/repositories/TransactionsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

container.registerSingleton<ICriteriasRepository>(
  'CriteriasRepository',
  CriteriasRepository,
);

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
