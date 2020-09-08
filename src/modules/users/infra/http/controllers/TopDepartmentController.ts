import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListRankService from '@modules/users/services/ListRankService';
import { classToClass } from 'class-transformer';

export default class TopDepartmentController {
  public async show(request: Request, response: Response): Promise<Response> {
    const listGPs = container.resolve(ListRankService);

    const list = await listGPs.execute();

    if (list) {
      const array = [];

      for (let key in list) {
        array.push(list[key]);
      }

      array.sort((a, b) => b.score - a.score);

      let rank = 1;
      for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i].score < array[i - 1].score) {
          rank++;
        }
        array[i].rank = rank;
      }

      const departments = array
        .map(e => e.department)
        .filter((v, i, a) => a.indexOf(v) === i);

      const departmentTotalScore: string[] = [];
      Array.from(new Set(array.map(x => x.department))).forEach(x => {
        departmentTotalScore.push(
          array
            .filter(y => y.department === x)
            .reduce((output, item) => {
              const departmentSum = array
                .filter(y => y.department === x)
                .reduce((a, b) => +a + +b.score, 0);
              const countDepartment = array.filter(
                item => item.department === x,
              ).length;
              const average = Math.ceil(departmentSum / countDepartment);
              output['department'] = x;
              output['average'] = average;
              return output;
            }, {}),
        );
      });
      const departmentRank = [];

      if (departmentTotalScore) {
        for (const key in departmentTotalScore) {
          departmentRank.push(departmentTotalScore[key]);
        }

        departmentRank.sort(function (a, b) {
          return b.average - a.average;
        });

        let rank = 1;
        for (let i = 0; i < departmentRank.length; i++) {
          if (
            i > 0 &&
            departmentRank[i].average < departmentRank[i - 1].average
          ) {
            rank++;
          }
          departmentRank[i].rank = rank;
        }
      }

      return response.json(classToClass(departmentRank));
    }
  }
}
