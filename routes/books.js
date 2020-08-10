const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//All Book Route

router.get('/',async (req,res)=> {
    res.send('All Books')
});


// New book Route
router.get('/new',(req,res)=>{
    res.send('New Book')
});

//Create book Route

router.post('/',async (req,res)=>{
    res.send('Create Book')
});

module.exports = router;