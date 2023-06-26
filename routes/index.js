const express = require("express");
const authRouter = require("./auth");
const fileRouter = require("./file")

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use('/auth', authRouter);
  router.use('/file', fileRouter)
}

module.exports = routerApi;