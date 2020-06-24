import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import TransactionsCriterias from '@modules/transactions/infra/typeorm/entities/TransactionsCriterias';

@Entity('criterias')
class Criteria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  icon: string;

  @Column('int')
  score: number;

  @OneToMany(
    () => TransactionsCriterias,
    transactionsCriterias => transactionsCriterias.transactions,
  )
  transactions_criterias: TransactionsCriterias[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Criteria;
