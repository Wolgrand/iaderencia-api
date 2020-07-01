import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListRankService from '@modules/users/services/ListRankService';
import { classToClass } from 'class-transformer';
import top3Router from '../routes/top3.routes';

export default class Top3Controller {
  public async show(request: Request, response: Response): Promise<Response> {
    const listGPs = container.resolve(ListRankService);

    const list = await listGPs.execute();

    if (list) {
      const array = [];

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

      const top3 = [];

      const length = array.length <= 3 ? array.length : 3;

      for (let i = 0; i < length; i++) {
        top3.push(array[i]);
      }

      return response.json(classToClass(top3));
    }
  }
}
