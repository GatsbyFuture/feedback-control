// middleware file...
const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const rotuerView = require('../routes/routeView');

module.exports = function (app) {
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static('public'));
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(cors());
 // qaysi muhitda ishlayotganini tekshirish...
 if (app.get('env') == 'development') {
  app.use(morgan('tiny'));
  console.log('development ishlayapti..');
 }
 app.use(helmet());

 app.use('/', rotuerView);
 

};