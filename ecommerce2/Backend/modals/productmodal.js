const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({

    title :  String,
    image : String,
    description : String,
    price: Number,
category : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : "Category"

},
})


module.exports = mongoose.model('Product', productSchema);