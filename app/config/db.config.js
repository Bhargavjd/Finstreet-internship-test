module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "users",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
// root@127.0.0.1:3306
