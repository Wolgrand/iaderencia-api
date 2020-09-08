"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateTransactionsReward1596222285529 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'transactions_rewards',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'user_id',
        type: 'uuid'
      }, {
        name: 'reward_id',
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
        name: 'UserId',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, {
        name: 'RewardId',
        columnNames: ['reward_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rewards',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('transactions_rewards');
  }

}

exports.default = CreateTransactionsReward1596222285529;