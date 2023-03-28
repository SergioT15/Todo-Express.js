const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();

const PORT = process.env.port || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Conected to MongoDB"))
  .catch(() => console.log("err"));

app.use(routes);

app.listen(PORT, () => console.log(`Listerning on ${PORT}`));
