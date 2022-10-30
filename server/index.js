const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
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
  await mongoose.connect(
    "mongodb+srv://parhamehelali:test123@test1.tdaf11d.mongodb.net/fullstack?retryWrites=true&w=majority"
  );
});
