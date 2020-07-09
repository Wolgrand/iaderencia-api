"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _PlayerService = _interopRequireDefault(require("../../../services/PlayerService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlayerController {
  async index(request, response) {
    const {
      user_id
    } = request.params;

    const playerService = _tsyringe.container.resolve(_PlayerService.default);

    const player = await playerService.execute(user_id);
    return response.json((0, _classTransformer.classToClass)(player));
  }

}

exports.default = PlayerController;