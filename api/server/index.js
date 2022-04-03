const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
require('dotenv').config()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require('fs');
const config = require("./config/key");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

app.use(cors())

app.use(bodyParser.json());
app.use(cookieParser());

//app.use('/posts', require('./routes/posts'));


//app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const loadAllRoutes = (app, apiVersion) => {
  fs
    .readdirSync(path.join(__dirname, 'routes'))
    .forEach((file) => {
      const module = path.join(__dirname, 'routes', file);
      const moduleRoute = file.substr(0, file.indexOf('.')).toLowerCase();

      if (fs.lstatSync(module).isFile()) {
        if (moduleRoute === 'index') {
          app.use(apiVersion + '/', require(module));
        } else {
          app.use(apiVersion + '/' + moduleRoute, require(module));
        }
      }
    });
};

// all
loadAllRoutes(app, '/v1');

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});