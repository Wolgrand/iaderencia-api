import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Reward from '@modules/rewards/infra/typeorm/entities/Reward';

@Entity('transactions_rewards')
class TransactionsRewards {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Reward, { eager: true })
  @JoinColumn({ name: 'reward_id' })
  reward: Reward;

  @Column()
  user_id: 'string';

  @Column()
  reward_id: 'string';

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TransactionsRewards;
