module.exports = app => {
  app.listen(app.get("port"), () => {
    console.log(`NTask API running at port ${app.get("port")}`);
  });
};

