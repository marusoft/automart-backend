import express from "express";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();

// create express server
const app = express();

// pcgcObnp7UG3eZY8
// username: automart
// mongodb+srv://automart:<password>@cluster0.9xdro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// db connection
mongoose
  .connect(process.env.MONGODB_URI || process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Suceessfully connected"))
  .catch((error) => console.log("Database Connection Error", error));

// apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.status(200).json({
    "message": "It all start from localhost"
  })
})

// Routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started running on port ${port}`);
});
