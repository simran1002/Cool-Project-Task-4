require('dotenv').config();
const mongoose = require("mongoose");
function connectDB() {
    // Database connection 
    mongoose.connect("mongodb+srv://simran1002:Simran10@cluster0.zwnkpzt.mongodb.net/?retryWrites=true&w=majority", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connection is successful");    
    }).catch((e)=>{
        console.log(e)
        console.log("no connection");
    })
}
module.exports = connectDB;