const express = require('express');
const router = express.Router();
const Task = require("../models/Task");

router.get('/', function(req, res) {
    Task.find({}, function(error, tasks) {
        if (error) {
          console.log(error);
        } else {
          res.render('index', { tasks: tasks});
        }
      });
});


router.post('/',async (req, res) => {
    const myTask = new Task({
        content: req.body.content
    });
    try {
        await myTask.save();
        Task.find({}, function(error, tasks) {
            if (error) {
              console.log(error);
            } else {
              res.render('index', { tasks: tasks});
            }
          });
    }
    catch (err){
        Task.find({}, function(error, tasks) {
            if (error) {
              console.log(error);
            } else {
              res.render('index', { tasks: tasks});
            }
          });
        console.log(err);
        console.log(req.body.content)
    }
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    Task.findByIdAndDelete(id, (error, value) => {
      if (error) {
        res.status(500).json({ error });
        console.log("Erreur")
      } else {
        res.json(value);
        console.log("Donnée supprimée")
      }
    });
  });



module.exports = router;