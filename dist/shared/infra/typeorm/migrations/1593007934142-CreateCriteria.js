"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateCriteria1593007934142 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'criterias',
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
    await queryRunner.dropTable('criterias');
  }

}

exports.default = CreateCriteria1593007934142;