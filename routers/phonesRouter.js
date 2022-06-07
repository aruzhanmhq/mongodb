const express = require("express");
const phonesRouter = express.Router();
const models = require('../Models.js');

phonesRouter.get('/', (req, res) => {
    models.Phone.find({}, (err, results) => {
        if(err) return console.log(err);
        res.send(results);
    })
})

phonesRouter.post('/', (req, res) => {
    const {model, price, year} = req.body;

    const phone = new models.Phone({model, price, year});

    phone.save(err => {
        if(err) return console.log(arr);
        res.send("Phone saved")
    });
})

module.exports = phonesRouter;