import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import uploadConfig from '@config/upload';
import TransactionsCriterias from '@modules/transactions/infra/typeorm/entities/TransactionsCriterias';
import TransactionsRewards from '@modules/transactions-rewards/infra/typeorm/entities/Transactions_Rewards';

import { Exclude, Expose } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(
    type => TransactionsCriterias,
    transactionsCriterias => transactionsCriterias.user,
  )
  transactions: TransactionsCriterias[];

  @Column()
  avatar: string;

  @Column('decimal')
  score: number;

  @Column()
  role: string;

  @Column()
  department: string;

  @Column()
  company: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatar_url(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.avatar}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
      default:
        return null;
    }
  }
}

export default User;
