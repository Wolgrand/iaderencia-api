"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateTransactionsCriterias1593017688195 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'transactions_criterias',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'criteria_id',
        type: 'uuid'
      }, {
        name: 'transaction_id',
        type: 'uuid'
      }, {
        name: 'score',
        type: 'integer'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }],
      foreignKeys: [{
        name: 'CriteriaId',
        columnNames: ['criteria_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'criterias',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, {
        name: 'TransactionId',
        columnNames: ['transaction_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'transactions',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('transactions_criterias');
  }

}

exports.default = CreateTransactionsCriterias1593017688195;