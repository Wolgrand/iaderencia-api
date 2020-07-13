import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateCriteriaService from '@modules/criterias/services/CreateCriteriaService';
import ListCriteriaService from '@modules/criterias/services/ListCriteriaService';
import DeleteCriteriaService from '@modules/criterias/services/DeleteCriteriaService';

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteCriteria = container.resolve(DeleteCriteriaService);

    const { id } = request.params;

    const criteria = await deleteCriteria.execute(id);

    return response.json(criteria);
  }
}
