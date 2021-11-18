const connectionDb = require("./db/db");
const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
require("dotenv").config();

//final url for mongoAtlas connection
const URL = process.env.MONGO_URI;
const PORT = process.env.PORT_NUMBER;

//setting up this inbulid express middleware that support for uploading the json from the user
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

//MIDDLEWARE FOR USING THE ROUTERS IN APP.JS
app.use("/api/v1/tasks", tasks);

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
