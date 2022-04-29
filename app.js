require("express-async-errors");
require("./db/connect");
const express = require("express");
const app = express();
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const route = require("./routes/routesmain");
// middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", route);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(1000, () => {
  console.log("server is running on 1000");
});
