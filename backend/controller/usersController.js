const usersService  = require('../services/usersService');

exports.getUsers = (req, res) => {
    const { name } = req.query;
    let users = usersService.getUsersServices();
    if (name) {
        users = users.filter(user => user.firstName === name);
    }

    res.send(users);
};

exports.create = (req, res) => {
    const newUser = req.body;
    const createdUser = usersService.createUser(newUser);
    res.status(201).send(createdUser);
};

exports.getById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = usersService.getUserById(userId);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
};


