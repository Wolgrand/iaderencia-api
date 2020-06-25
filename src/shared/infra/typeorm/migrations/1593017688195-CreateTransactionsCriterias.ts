import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransactionsCriterias1593017688195
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions_criterias',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'criteria_id',
            type: 'uuid',
          },
          {
            name: 'transaction_id',
            type: 'uuid',
          },
          {
            name: 'score',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'CriteriaId',
            columnNames: ['criteria_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'criterias',
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          {
            name: 'TransactionId',
            columnNames: ['transaction_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'transactions',
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions_criterias');
  }
}
