// Configure express, cors, dotenv, mongodb
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// MongoDB
// Note to self: this require activates the MongoDB connection
require('./db/conn');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3006;

// Router
const api = require("./api/routes");
app.use("/api", api);

console.log("Starting server")
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});