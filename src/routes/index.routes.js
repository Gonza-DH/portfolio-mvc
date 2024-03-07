const express = require('express');
const path = require('path');
const routes = express.Router();

const productRouter = require('./products.routes')
const userRouter = require('./users.routes')

routes.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views/home.html')));
routes.use('/products', productRouter);
routes.use('/users', userRouter);
routes.get('/about', (req,res) => res.sendFile(path.resolve(__dirname, '../views/about.html')));

module.exports = routes;