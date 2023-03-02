const express = require("express");
const path = require("path");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");

const app = express();

// use some application-level middlewares
app.use(cors());

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

app.use(postRoutes);

module.exports = app;
