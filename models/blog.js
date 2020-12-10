/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'You can not leave the title empty'],
  },
  content: {
    type: String,
    rquired: [true, 'You can not leave the content empty'],
    minlength: [250, 'You must enter more then 250 charactor'],
  },
  blogDate: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model('Blog', blogSchema);
