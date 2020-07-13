const { Router } = require("express");

const { about, home } = require('./../controllers/homeController')

const homeRouter = Router();

homeRouter.use("/about", about);
homeRouter.use("/", home);

module.exports = homeRouter;
