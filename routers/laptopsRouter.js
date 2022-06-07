const express = require("express");
const laptopsRouter = express.Router();
const models = require('./../Models.js');

laptopsRouter.get('/', (req, res) => {
    models.Laptop.find({}, (err, results) => {
        if(err) return console.log(err);
        res.send(results);
    })
})

laptopsRouter.post('/', (req, res) => {
    const {model, price, year} = req.body;

    const laptop = new models.Laptop({model, price, year});

    laptop.save(err => {
        if(err) return console.log(arr);
        res.send("Laptop saved")
    });
})

module.exports = laptopsRouter;