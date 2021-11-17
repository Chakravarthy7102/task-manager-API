const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
//setting up this inbulid express middleware that support for uploading the json from the user
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/tasks", tasks);

app.listen(3000, () => {
  console.log("the app is listening at port 3000");
});
