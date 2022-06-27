const express = require('express')
const router = express.Router();
const Post = require('../models/Post');


router.get('/', async (req, res) => {

    try{
       res.json("reached thiss")

    }catch(err){
        res.json({message: err});
    }
    


});

router.get('/next', async (req, res) => {

    try{
       
        res.json("this is next return");

    }catch(err){
        res.json({message: err});
    }
    


});




module.exports = router;