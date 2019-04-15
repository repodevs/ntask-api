describe("Routes: Token", () => {
  const Users = app.db.models.Users;

  describe("POST /token", () => {
    beforeEach(done => {
      // Run before each tests
      Users
        .destroy({where: {}})
        .then(() => Users.create({
          name: "Jhon",
          email: "jhon@mail.net",
          password: "12345"
        }))
        .then(() => done());
    });
    describe("Status 200", () => {
      it("returns authenticated user token", done => {
        request.post("/token")
          .send({
            email: "jhon@mail.net",
            password: "12345"
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.include.keys("token");
            done(err);
          });
      }); 
    });
    describe("Status 401", () => {
      it("throws error when password is incorrect", done => {
        request.post("/token")
          .send({
            email: "jhon@mail.net",
            password: "WORNG_PWD"
          })
          .expect(401)
          .end((err, res) => { 
            done(err);
          });
      });
      it("throws error when email not exist", done => {
        request.post("/token")
          .send({
            email: "wrong@mail.net",
            password: "12345"
          })
          .expect(401)
          .end((err, res) => {
            done(err);
          });
      });
      it("throws error when email and password are blank", done => {
        request.post("/token")
          .expect(401)
          .end((err, res) => {
            done(err);
          });
      });
    });
  });
});
