const db = require("../utils/database");
const dateTime = require("node-datetime");
const bcrypt = require("bcrypt");
const saltAuth = 10;
const fs = require("fs");
const path = require("path");
module.exports = class cardModel {
  static getAlert = async () => {
    let result = db.query_new(
      "select alerts.id,a.name , u.username, if(alerts.user_type='1','Users','Store') as types ,alerts.created_at,alerts.message from alerts as alerts, admin as a,users as u where a.id=alerts.user_id and u.id=alerts.send_to order by alerts.id DESC"
    );
    return result;
  };

  static getUserByType = async (user_type) => {
    let result = db.query_new(
      "select * from users where user_type=? and status=1",
      [user_type]
    );
    return result;
  };

  static addAlerts = async (user_id, send_to, message, user_type) => {
    const dt = dateTime.create();
    let created = dt.format("Y-m-d H:M:S");
    let results = db.query_new(
      "insert into alerts (user_id,send_to,message,user_type,created_at) values(?,?,?,?,?)",
      [user_id, send_to, message, user_type, created]
    );
    return results;
  };
};
