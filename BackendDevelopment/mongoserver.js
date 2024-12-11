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
mongoose.connect('mongodb+srv://IanFahy:lampard14@drqproject2024.psofp.mongodb.net/?retryWrites=true&w=majority&appName=DRQProject2024');

const appSchema = new mongoose.Schema({
    title:String,
    example:String,
    example2:String
});

const appModel = new mongoose.model('x', appSchema);

application.listen(portRef, () => {
    console.log(`Server is running on http://localhost:${portRef}`)
});