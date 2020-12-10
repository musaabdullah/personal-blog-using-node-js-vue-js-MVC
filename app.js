/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const blogRoute = require('./routers/blog');

const app = express();

const PORT = process.env.PORT || 3000;
// My mistake was in spelling in the word engine i wrote enging.
app.use(morgan('dev'));
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/profile', express.static('upload/images'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/blog', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((res) => { console.log(`connected successfuly ${res}`); })
  .catch((err) => { console.log(err); });
app.use('/blogs', blogRoute);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
