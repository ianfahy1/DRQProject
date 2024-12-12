const express = require('express');
const application = express();
const portRef = 4000;

const cors = require('cors');
application.use(cors())

application.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const body_parser = require('body-parser');
application.use(body_parser.urlencoded({extended:true}));
application.use(body_parser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://IanFahy:lampard14@drqproject2024.psofp.mongodb.net/DRQProject2024');

const appSchema = new mongoose.Schema({
    taskName:String,
    taskDetails:String,
    taskDeadline:Date
});

const appModel = new mongoose.model('Tasks', appSchema);

application.listen(portRef, function(err){
    if(err) console.log("Error in server setup")
    console.log(`Server is running on http://localhost:${portRef}`)
});