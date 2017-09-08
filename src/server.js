const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
// created model loading here
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');
const routes = require('./api/routes/todoListRoutes');

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  console.log(__dirname);
  async function wait(data) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 7000);
    });
  }
  async function demo() {
    const res = await wait('test');
    console.log(res);
  }
  demo();
  console.log('start');
});

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.21.190:27017/Tododb');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// app.use(function (req, res) {
//     res.status(404).send({ url: req.originalUrl + ' not found' })
// });


routes(app); // register the routes
