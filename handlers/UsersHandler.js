const database = require("../mock/database");

exports.getOneUser = (req, res) => {
  for (let user of database.users) {
    if (user.id === Number(req.params.userId)) {
      res.json({
        status: "succes",
        data: {
          user: user,
        },
      });
      return;
    }
  }
  res.status(404).json({
    status: "error",
    data: {
      message: "Could not find blog with that id",
    },
  });
};

exports.getAllUsers = (req, res) => {
  res.json({
    status: "succes",
    data: {
      users: database.users,
    },
  });
};

exports.deleteUserHandler = (req, res) => {
  for (let i = 0; i < database.users.length; i++) {
    const user = database.users[i];
    if (database.users.id === Number(req.params.id)) {
      //უნდა წავშალოთ
      database.users.splice(i, 1);
      res.end("deleted succesfully");
      return;
    }
  }
  res.end("could not find blog");
};

exports.loginHandler = (req, res) => {
  console.log(req.body);
  for (let userInDb of database.users) {
    if (userInDb.userName === req.body.userName && userInDb.password === req.body.pass) {
      //succesfull loggin
      res.json({
        status: "succes",
        data: {
          user: userInDb,
        },
      });
      return;
    }
  }

  res.json({
    status: "error",
    error: {
      message: "user not found",
    },
  });
};

exports.registerHandler = (req, res) => {
  if (!req.body.userName || !req.body.password || !req.body.email) {
    res.status(400).json({
      status: "error",
      error: {
        message: "user allready exists",
      },
    });
    return;  
  }

  for (let userInDb of database.users) {
    if (userInDb.userName === req.body.userName) {
      res.json({
        status: "error",
        error: {
          message: "user allready exists",
        },
      });
      return;
    }
  }
  const lastuser = database.users[database.users.length - 1];
  const id = lastuser ? lastuser.id + 1 : 0;

  const newUser = {
    id: id,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName,
  };
  database.users.push(newUser);
  res.json({
    status: "succes",
    data: {
      user: newUser,
    },
  });
};


