const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaptopShema = new Schema({
    model: String,
    price: Number,
    year: Number,
});

const PhoneShema = new Schema({
    model: String,
    price: Number,
    year: Number,
});

module.exports = {
    LaptopShema,
    PhoneShema
}