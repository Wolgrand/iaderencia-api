import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListRankService from '@modules/users/services/ListRankService';

export default class RankController {
  public async show(request: Request, response: Response): Promise<Response> {
    const listGPs = container.resolve(ListRankService);

    const list = await listGPs.execute();

    return response.json(list);
  }
}
