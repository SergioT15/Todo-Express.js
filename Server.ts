import express from "express";
import mongoose from "mongoose";
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT_EV;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Conected to MongoDB"))
  .catch(() => console.log("err"));

app.use(routes);

app.listen(PORT, () => console.log(`Listerning on ${PORT}`));
