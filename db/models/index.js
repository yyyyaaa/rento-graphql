import { Sequelize } from 'sequelize';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../../', 'config', 'db.json'))[env];

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL, config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {
  // import models as needed
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;