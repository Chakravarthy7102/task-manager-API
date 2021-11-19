const connectionDb = require("./db/db");
const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const notFound404 = require("./middlewares/404");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

//final url for mongoAtlas connection
const URL = process.env.MONGO_URI;
const PORT = process.env.PORT || process.env.PORT_NUMBER;

//setting up this inbulid express middleware that support for uploading the json from the user
app.use(express.json());

//MIDDLEWARE FOR USING THE ROUTERS IN APP.JS
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);
app.use(notFound404);
app.use(errorHandler);

const start = async () => {
  try {
    await connectionDb(URL);
    app.listen(PORT, () => {
      console.log(`the app is listening at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

//starting the connection after the verification
start();
