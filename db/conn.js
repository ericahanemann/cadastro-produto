const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("products_db", "root", "CachaÇa@0901", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

try {
  sequelize.authenticate();
  console.log("conectado com o sequelize");
} catch (err) {
  console.log("erro ao conectar com o banco de dados: ", err);
}

module.exports = sequelize;
