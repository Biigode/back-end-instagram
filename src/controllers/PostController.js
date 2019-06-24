const post = require('../models/post');
const express = require('express');

module.exports = {
    async index (req,res){

    },
    async store (req,res){
        console.log(req.body);
        return res.json({ok:true});
    }
};