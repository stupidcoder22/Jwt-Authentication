const jsonwebtoken = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const secret = "prateekisstupid";
const login = async (req, res) => {
  const { username, pass } = req.body;
  console.log(username, pass);
  if (!username || !pass) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  const payload = {
    id: new Date().getDate(),
    username: username,
  };

  const token = jsonwebtoken.sign(payload, secret);
  res.status(200).json({ token: token });
};

const dashboard = async (req, res) => {
  const auth = req.headers.authorization;

  if (!auth) {
    throw new CustomAPIError("No token provided", 401);
  }
  var id;
  try {
    const verify = jsonwebtoken.verify(auth, secret);
    var { id, username } = verify;
    console.log(username);
  } catch (error) {
    throw new CustomAPIError("Not Authorized to access the route", 401);
  }

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${username}', secret: Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
module.exports = {
  login,
  dashboard,
};
