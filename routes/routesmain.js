const route = require("express").Router();

const { login, dashboard } = require("../controllers/controllermain");

route.get("/dashboard", dashboard);

route.post("/login", login);
module.exports = route;
