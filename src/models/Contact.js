const mongoose = require("mongoose");

// creating schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

// Creating a model
const Contact = mongoose.model("Contact", contactSchema);

// exporting the model
module.exports = Contact;
