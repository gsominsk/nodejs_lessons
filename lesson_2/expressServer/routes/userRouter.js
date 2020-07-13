const { Router } = require("express");

const { addUser, getUsers } = require('./../controllers/userController')

const userRouter = Router();

userRouter.post("/create", addUser);
userRouter.post("/", getUsers);

module.exports = userRouter;
