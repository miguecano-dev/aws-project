const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Running to App Test");
});

app.get("/users", (req, res) => {
  res.send("Running to Route users with all users");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
