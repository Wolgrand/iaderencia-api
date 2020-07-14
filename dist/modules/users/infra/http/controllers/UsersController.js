"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersController {
  async create(request, response) {
    const {
      name,
      email,
      password,
      role,
      department,
      company
    } = request.body;

    const createUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await createUser.execute({
      name,
      email,
      password,
      role,
      department,
      company
    });
    delete user.password;
    return response.json((0, _classTransformer.classToClass)(user));
  }

  async show(request, response) {
    const findUsers = _tsyringe.container.resolve(_CreateUserService.default);

    const users = await findUsers.show();
    return response.json((0, _classTransformer.classToClass)(users));
  }

  async delete(request, response) {
    const {
      id
    } = request.params;

    const findUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await findUser.delete(id);
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

exports.default = UsersController;