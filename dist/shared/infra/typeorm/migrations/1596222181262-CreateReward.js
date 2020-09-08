"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateReward1596222181262 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'rewards',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'title',
        type: 'varchar',
        isUnique: true
      }, {
        name: 'description',
        type: 'varchar'
      }, {
        name: 'score',
        type: 'integer'
      }, {
        name: 'icon',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('rewards');
  }

}

exports.default = CreateReward1596222181262;