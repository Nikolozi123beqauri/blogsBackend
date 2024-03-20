const express = require("express")
const {
    getAllUsers,
    getOneUser,
    loginHandler,
    registerHandler
} = require("../handlers/UsersHandler")

const userRouter = express.Router()
userRouter
.route("/api/v1/users")
.get(getAllUsers)

userRouter
.route("/api/v1/user/:userId")
.get(getOneUser)
.post(registerHandler)

userRouter
.route("/api/v1/users/login")
.post(loginHandler)


module.exports = userRouter; 