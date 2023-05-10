class UserController {
  static async userList(req, res, next) {
    const userList = require("../data/users.json");
    res.status(200).json(userList);
  }

  static async addUser(req, res) {
    const { body } = req;
    const userList = require("../data/users.json");

    userList.push({...body})
    res.status(200).json(userList);
  }
}

module.exports = UserController;
