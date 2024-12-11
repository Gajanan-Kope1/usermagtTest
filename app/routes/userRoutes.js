const controller = require("../controllers/userController");

module.exports = function(app) {
  app.post("/createboard", controller.createboard);
  app.get("/getboard", controller.getboard);
  app.post("/createuser", controller.createUser);
  app.get("/getuser", controller.getuser);
};