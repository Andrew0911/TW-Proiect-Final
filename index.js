const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./controller/carController'))

app.listen("3007", () =>
  console.log("Server started at: http://localhost:3007")
);