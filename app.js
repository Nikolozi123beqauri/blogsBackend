const express = require("express");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
console.log("Enviroment", process.env.ENV);

const mongoose = require("mongoose");
const blogrouter = require("./routes/BlogRouter.js");
const userRouter = require("./routes/UserRouter.js");
const { getAllBlogsHandler } = require("./handlers/BlogHandler.js");
const Blog = require("./models/blogModel.js")
const app = express();
app.use(express.json());



app.get("/", (req, res) => {
  res.end("hello");
});

app.use("", blogrouter);

app.use("", userRouter);

const connectionPassword = process.env.DATABASE_PASSWORD;

const connectionURL = process.env.DATABASE_URL.replace(
  "<password>",
  connectionPassword
);

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((conn) => {
    console.log("Succesfully Connected To Database");
  })
  .catch((err) => {
    console.log("could not connect", err);
  });

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
