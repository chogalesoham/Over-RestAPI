const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hello From Home Page");
});

//Rouers
app.use("/api/products", router);

const Start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log("Over API is Live on", PORT));
  } catch (error) {
    console.log({ Error: error });
  }
};

Start();
