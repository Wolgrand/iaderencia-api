import User from '@modules/users/infra/typeorm/entities/User';
import Reward from '@modules/rewards/infra/typeorm/entities/Reward';

interface IReward {
  reward_id: string;
  score: number;
}

export default interface ICreateTransactionDTO {
  user_id: string;
  reward_id: string;
  score: number;
}
