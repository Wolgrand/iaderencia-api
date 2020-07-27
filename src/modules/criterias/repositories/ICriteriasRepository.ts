import Criteria from '../infra/typeorm/entities/Criteria';

import ICreateCriteriaDTO from '../dtos/ICreateCriteriaDTO';
import IUpdateCriteriaDTO from '../dtos/IUpdateCriteriaDTO';

interface IFindCriterias {
  id: string;
}

export default interface ICriteriasRepository {
  create(data: ICreateCriteriaDTO): Promise<Criteria>;
  findByName(name: string): Promise<Criteria | undefined>;
  findAllById(products: IFindCriterias[]): Promise<Criteria[]>;
  findById(id: string): Promise<Criteria>;
  findAll(): Promise<Criteria[]>;
  delete(criteria: Criteria): Promise<Criteria>;
  update(data: IUpdateCriteriaDTO): Promise<Criteria>;
}
