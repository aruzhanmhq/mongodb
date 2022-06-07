const mongoose = require("mongoose");
const schemas = require("./Schemas.js");

const Laptop = mongoose.model("Laptop", schemas.LaptopShema);
const Phone = mongoose.model("Phone", schemas.PhoneShema);

module.exports = {
    Laptop,
    Phone
}