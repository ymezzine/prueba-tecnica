const users = require('../data/users.json');

exports.getUsersServices = () => {
    return users;
};

exports.createUser = (newUser) => {
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
};

exports.getUserById = (id) => {
    return users.find(user => user.id === id);
};