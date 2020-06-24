import User from '@modules/users/infra/typeorm/entities/User';

interface ICriteria {
  criteria_id: string;
  score: number;
}

export default interface ICreateTransactionDTO {
  user: User;
  criterias: ICriteria[];
}
