import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import Criteria from '@modules/criterias/infra/typeorm/entities/Criteria';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('transactions_criterias')
class TransactionsCriterias {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    () => Transaction,
    transaction => transaction.transaction_criterias,
  )
  @JoinColumn({ name: 'transaction_id' })
  transaction: Transaction;

  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Criteria, { eager: true })
  @JoinColumn({ name: 'criteria_id' })
  criteria: Criteria;

  @Column()
  criteria_id: string;

  @Column()
  transaction_id: string;

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TransactionsCriterias;
