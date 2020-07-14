"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IHashProvider = _interopRequireDefault(require("../providers/HashProvider/models/IHashProvider"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateUserService {
  constructor(usersRepository, hashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async execute({
    name,
    email,
    password,
    role,
    company,
    department
  }) {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new _AppError.default('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);
    let setRole = 'gp';
    let setDepartment = '';
    let setCompany = '';

    if (role) {
      setRole = role;
    }

    if (department) {
      setDepartment = department;
    }

    if (company) {
      setCompany = company;
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      score: 0,
      role: setRole,
      company: setCompany,
      department: setDepartment
    });
    return user;
  }

  async show() {
    const users = await this.usersRepository.findAllUsers();
    return users;
  }

  async delete(id) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new _AppError.default('User not found');
    }

    await this.usersRepository.delete(user);
    return user;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateUserService;
exports.default = _default;