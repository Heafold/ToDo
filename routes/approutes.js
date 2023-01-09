const express = require('express');
const router = express.Router();
const Task = require("../models/Task");

router.get('/', function(req, res) {
    res.render('index')
});

router.post('/',async (req, res) => {
    const myTask = new Task({
        content: req.body.content
    });
    try {
        await myTask.save();
        res.render('index');
        console.log("yes")
    }
    catch (err){
        res.render('index');
        console.log(err);
        console.log(req.body.content)
    }
});



module.exports = router;