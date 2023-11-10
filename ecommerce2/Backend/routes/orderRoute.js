const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/FetchUser');
const { OrderItem } = require('../modals/orderitem');
const { Order } = require('../modals/order');


router.get('/getorder', async(req,res)=>{
    const orders = await Order.find()
    res.json(orders)


})



router.post('/neworder', async(req,res)=>{

    const orderItemsids = Promise.all(req.body.orderItems.map(async (orderitem)=>{

        let newOrderItem = new OrderItem({
            quantity : orderitem.quantity,
            product : orderitem.product
        })

        newOrderItem = await newOrderItem.save()
        return newOrderItem._id
        
    }))
     orderitemidsresolved = await orderItemsids

     const totalPrices = await Promise.all(orderitemidsresolved.map(async (orderItemId)=>{
        const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
        const totalPrice = orderItem.product.price * orderItem.quantity;
        return totalPrice
    }))

    const totalPrice = totalPrices.reduce((a,b) => a +b , 0);
    const neworder = new Order({
        orderItems: orderitemidsresolved,
        shippingAddress2: req.body.shippingAddress2,
        city : req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: totalPrice,
        


    });

const savedOrder = neworder.save();
    res.json(savedOrder);

})


module.exports = router;