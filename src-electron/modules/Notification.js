import getMainWindow from "../electron-main";
const { Sequelize, DataTypes, Model } = require("sequelize");

let instance;

class Notification {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  async notify(options) {
    const mainWindow = getMainWindow();
    if (mainWindow) {
      let optionsFromDB = {};
      if (options.template)
        optionsFromDB = await this.getOptionsFromDB(options.template);
      mainWindow.webContents.send(
        "show-message",
        Object.assign(optionsFromDB, options)
      );
    }
  }
  async getOptionsFromDB(template) {
    const sequelize = new Sequelize(
      "postgres://postgres:postgres@localhost:5445/EN_list_notifications"
    );
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:");
      return { message: "Unable to connect to the database", type: "negative" };
    }
    const notification = sequelize.define(
      "Notification",
      {
        // Model attributes are defined here
        message: {
          type: DataTypes.STRING,
        },
        caption: {
          type: DataTypes.STRING,
        },
        template: {
          type: DataTypes.STRING,
        },
        position: {
          type: DataTypes.STRING,
        },
        icon: {
          type: DataTypes.STRING,
        },
        type: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "Notifications",
      }
    );
    try {
      let queryResult = await notification.findAll({
        attributes: [
          "message",
          "template",
          "icon",
          "position",
          "caption",
          "type",
        ],
        where: {
          template: template,
        },
      });
      return queryResult[0] ? queryResult[0].dataValues : {};
    } catch (error) {
      console.error("Wrong params in the database:  ", error);
      return { message: "Wrong params in the database", type: "negative" };
    }
  }
}

export default new Notification();
