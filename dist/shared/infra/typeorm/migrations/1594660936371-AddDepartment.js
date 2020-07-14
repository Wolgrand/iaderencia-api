"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class AddDepartment1594660936371 {
  async up(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'department',
      type: 'varchar',
      isNullable: true
    }));
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'company',
      type: 'varchar',
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('users', 'company');
    await queryRunner.dropColumn('users', 'department');
  }

}

exports.default = AddDepartment1594660936371;