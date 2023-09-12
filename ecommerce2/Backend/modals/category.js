const mongoose = require('mongoose');
const { Schema} = mongoose;


const categorySchema = new Schema({
    categoryName : String,
    description: String,

})

const Category = mongoose.model( "category", categorySchema);
module.exports = Category
