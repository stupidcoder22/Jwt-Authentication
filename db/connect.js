const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/JWT";
const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = mongoose.connect(url, mongodbOptions);
if (connect) {
  console.log("database is connected");
} else {
  console.log("some database error");
}
module.exports = connect;
