import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import Criteria from '@modules/criterias/infra/typeorm/entities/Criteria';

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

  @ManyToOne(() => Criteria, criteria => criteria.transaction_criterias)
  @JoinColumn({ name: 'criteria_id' })
  criteria: Criteria;

  @Column()
  criteria_id: string;

  @Column()
  transaction_id: string;

  @Column()
  score: number;

  @Column()
  icon: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TransactionsCriterias;
