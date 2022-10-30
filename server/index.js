const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    required: true,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});
app.post("/user", async (req, res) => {
  console.log(req.body);
  const user = await User.create(req.body);
  res.send(user);
});

app.listen(3000, async () => {
  console.log("listening on port 3000");
  await mongoose.connect(process.env.MONGODB_URL);
});
