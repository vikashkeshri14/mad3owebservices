const cardModel = require("../models/cardModel");
const axios = require("axios");
module.exports = class alertControllers {
  static getAlert = async (req, res, next) => {
    try {
      const results = await alertModel.getAlert();
      const obj = { result: results, status: 200 };
      res.status(200).json(obj);
    } catch (err) {
      err.statusCode = 500;
      next();
    }
  };
};
