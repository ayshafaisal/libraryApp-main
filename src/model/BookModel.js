const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://tiya:tiya@cluster0.qh8z9se.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/Library');

mongoose.connect('mongodb+srv://tiya:1DsDl6uWqKVpVheH@authordata.q6ugz9d.mongodb.net/casestudy?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;