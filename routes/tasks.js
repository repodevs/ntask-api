module.exports = app => {
  const Tasks = app.db.models.Tasks;

  /**
   * Routes for `/tasks`
   **/  
//  app.get("/tasks", (req, res) => {
//    Tasks.findAll({}).then(tasks => {
//      res.json({tasks: tasks});
//    });
//  });

  app.route("/tasks")
    .all((req, res, next) => {
      /** Middleware **/ 
      delete req.body.id;
      next();
    })
    .get((req, res, next) => {
      Tasks.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .post((req, res, next) => {
      Tasks.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        });
    })
    ;
};
