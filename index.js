import express from "express";
import consign from "consign";

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Auto load the modules
consign()
  .include("libs/config.js")
  .then("db.js")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

