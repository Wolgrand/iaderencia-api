import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import rankRouter from '@modules/users/infra/http/routes/rank.routes';
import playerRouter from '@modules/users/infra/http/routes/player.routes';
import top3Router from '@modules/users/infra/http/routes/top3.routes';
import criteriasRouter from '@modules/criterias/infra/http/routes/criterias.routes';
import transactionsRouter from '@modules/transactions/infra/http/routes/transactions.routes';

const routes = Router();

routes.use('/players', playerRouter);
routes.use('/top3', top3Router);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/rank', rankRouter);
routes.use('/transactions', transactionsRouter);
routes.use('/criterias', criteriasRouter);

export default routes;
