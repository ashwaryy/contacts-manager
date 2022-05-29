const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const router = require("./routes/router");
const connectDB = require("./db/connect");

//cors
app.use(cors());

//body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from contacts manager :)");
});

app.use("/", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
