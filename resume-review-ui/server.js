const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // Change if needed

app.use(cors());
app.use(bodyParser.json());

// Replace with real auth logic
const validCredentials = {
  username: "admin",
  password: "password",
};

// Sample Login Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === validCredentials.username && password === validCredentials.password) {
    return res.json({ token: "fake-temp-token" }); // Replace with real JWT
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log("Test API server running at http://localhost:"+PORT);
});
