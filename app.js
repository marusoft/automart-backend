import express from "express";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();

// create express server
const app = express();

// db connection
mongoose.connect(process.env.DATABASE, {
  // userNewUrlParser: true,
  // useFindAndModify: false,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
}).then(() => console.log("DB Suceessfully connected"))
.catch((error) => console.log("DB connection error", error))

// apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started running on port ${port}`);
});
