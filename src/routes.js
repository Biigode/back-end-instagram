const express = require('express');
const routes = new express.Router();
const multer = require('multer');
const upload = multer();
const post = require('./controllers/PostController');

routes.get('/',(req,res)=>{
   return res.send('hello');
});
routes.post('/',upload.single('image'),post.store);
   module.exports = routes;