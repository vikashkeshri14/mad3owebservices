const express = require("express");
const alertControllers = require("../controllers/card");
const Router = express.Router();
Router.get("/getcards", alertControllers.getAlert);

module.exports = Router;
