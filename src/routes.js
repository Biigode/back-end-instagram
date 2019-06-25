const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const post = require('./controllers/PostController');
const like = require('./controllers/likeController');

const upload = multer(uploadConfig);
const routes = new express.Router();


routes.get('/',post.index);
routes.post('/',upload.single('image'),post.store);
routes.post('/:id/like',like.store);

module.exports = routes;