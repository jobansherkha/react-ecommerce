const mongoose = require('mongoose');
const { Schema} = mongoose;


const orderitemsSchema = new Schema({
    quantity : {
        type : Number,
        required: true
    },
    product: {
        type:mongoose.Schema.Types.ObjectId ,
        ref : 'Product',
        required: true
    }

})

exports.OrderItem = mongoose.model('OrderItem', orderitemsSchema);