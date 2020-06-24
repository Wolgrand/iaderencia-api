import Criteria from '../infra/typeorm/entities/Criteria';

import ICreateCriteriaDTO from '../dtos/ICreateCriteriaDTO';

interface IFindCriterias {
  id: string;
}

export default interface ICriteriasRepository {
  create(data: ICreateCriteriaDTO): Promise<Criteria>;
  findByName(name: string): Promise<Criteria | undefined>;
  findAllById(products: IFindCriterias[]): Promise<Criteria[]>;
  findAll(): Promise<Criteria[]>;
}
