process.stdout.write('\033c');// clear terminal
const express = require("express");
// const routes = require("./controllers/router.js");

const app = express();// instantiate Express app

//encoding middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use(express.static("public"));
// app.use("/", routes);

module.exports = app;
