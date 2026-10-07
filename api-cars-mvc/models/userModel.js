let users = [
  {
    id: 1,
    name: "Matti Seppänen",
    password: "M@45mtg$",
    username: "mattis",
    address: "Mannerheimintie 14, 00100 Helsinki",
    age: 23,
  },
];

const User = {
  getAll() {
    return users;
  },

  getById(id) {
    return users.find((user) => user.id === Number(id));
  },

  addOne(user) {
    const newUser = {
      id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      ...user,
    };

    users.push(newUser);
    return newUser;
  },

  updateOne(id, data) {
    const index = users.findIndex((user) => user.id === Number(id));

    if (index === -1) {
      return null;
    }

    users[index] = {
      ...users[index],
      ...data,
      id: users[index].id,
    };

    return users[index];
  },

  deleteOne(id) {
    const index = users.findIndex((user) => user.id === Number(id));

    if (index === -1) {
      return null;
    }

    const deletedUser = users[index];
    users.splice(index, 1);

    return deletedUser;
  },
};

module.exports = User;
