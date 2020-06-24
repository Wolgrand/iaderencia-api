import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateCriteriaService from '@modules/criterias/services/CreateCriteriaService';
import ListCriteriaService from '@modules/criterias/services/ListCriteriaService';

export default class CriteriasController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, icon, score } = request.body;

    const createCriteria = container.resolve(CreateCriteriaService);

    const criteria = await createCriteria.execute({
      title,
      icon,
      score,
    });

    return response.json(criteria);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const listCriterias = container.resolve(ListCriteriaService);

    const criterias = await listCriterias.execute();

    return response.json(criterias);
  }
}
