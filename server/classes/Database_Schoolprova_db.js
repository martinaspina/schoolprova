// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_schoolprova_db";
import UserModel from "../models/Schoolprova_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.schoolprova_db.host +
        ":" +
        properties.schoolprova_db.port +
        "//" +
        properties.schoolprova_db.user +
        "@" +
        properties.schoolprova_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.schoolprova_db.name,
      properties.schoolprova_db.user,
      properties.schoolprova_db.password,
      {
        host: properties.schoolprova_db.host,
        dialect: properties.schoolprova_db.dialect,
        port: properties.schoolprova_db.port,
        logging: false
      }
    );
    this.dbConnection_schoolprova_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_schoolprova_db;
  }
}

export default new Database();
