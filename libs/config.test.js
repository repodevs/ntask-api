module.exports = {
  database: "ntask",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: "Nt4$k-4P1",
  jwtSession: {
    session: false
  }
};

