import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import TransactionsCriterias from '@modules/transactions/infra/typeorm/entities/TransactionsCriterias';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(
    () => TransactionsCriterias,
    transactionsCriterias => transactionsCriterias.transaction,
    {
      eager: true,
      cascade: true,
    },
  )
  transaction_criterias: TransactionsCriterias[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
