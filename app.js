var express=require('express');
var todocontrollers=require('./controllers/todocontrollers');
var app=express();



// set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./nodeapp'));
app.use("/nodeapp", express.static(__dirname + '/nodeapp'));﻿
app.use(express.static('nodeapp'));﻿
app.use('/assets', express.static('assets'));
//fire controllers

todocontrollers(app);

//lisetening to port
app.listen(3000);
console.log('you are listening to port 3000');
