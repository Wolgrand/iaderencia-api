import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { classToClass } from 'class-transformer';
import ListRankService from '../../../services/ListRankService';

export default class RankController {
  public async show(request: Request, response: Response): Promise<Response> {
    const listGPs = container.resolve(ListRankService);

    const list = await listGPs.execute();
    const array = [];

    if (list) {
      for (let key in list) {
        array.push(list[key]);
      }

      array.sort(function (a, b) {
        return b.score - a.score;
      });

      let rank = 1;
      for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i].score < array[i - 1].score) {
          rank++;
        }
        array[i].rank = rank;
      }
    }
    return response.json(classToClass(array));
  }
}
