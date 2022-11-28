require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
const cors = require('cors');
require("./config/connection")
// Cors 
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }
//const static_path=path.join(__dirname,"../views")
//app.use(express.static(static_path));
console.log(path.join(__dirname));

//app.use(express.static());





app.use(cors(corsOptions))


const connectDB = require('./config/connection');
connectDB();

const static_path = path.join(__dirname, "./public");
const views_path = path.join(__dirname, "./views");

app.get("/",(req,res) => {
  res.send("Simran")
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));