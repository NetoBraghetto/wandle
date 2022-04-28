import { Sequelize } from "sequelize";
import { config } from "../config";

const dbConfig = config.database.connections[config.database.default];

const db = new Sequelize({
  dialect: dbConfig.dialect,
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
});

// db.authenticate().then(() => {
//   console.log('=============================================');
//   console.log('Connection has been established successfully.');
//   console.log('=============================================');
// })
// .catch((error) => {
//   console.error('Unable to connect to the database:', error);
// });

export default db;
