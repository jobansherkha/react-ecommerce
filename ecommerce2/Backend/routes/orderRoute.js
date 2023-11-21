const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/FetchUser');
const { OrderItem } = require('../modals/orderitem');
const { Order } = require('../modals/order');
const {Product} = require('../modals/productmodal');
const User = require('../modals/user');





router.get('/getorder', async(req,res)=>{
    const orders = await Order.find().populate('orderitems').populate('orderitems.product')
    res.json(orders)


})

router.get('/getuserorder',fetchuser, async(req,res)=>{
    // const orders = await Order.find({user : req.user._id})
    // res.json(orders)
    try {
        const orders = await Order.find({ user: req.user.id })
        .populate({
            path: 'orderItems',
            populate: {
              path: 'product', // Assuming there's a 'user' field in the Comment schema
            },
          })
          .populate('user')
        
       
        res.json(orders);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
      }

})


router.post('/neworder', fetchuser, async(req,res)=>{

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
    const neworder =  new Order({
        orderItems: orderitemidsresolved,
        shippingAddress2: req.body.shippingAddress2,
        city : req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: totalPrice,
        user : req.user.id,
        


    });

const savedOrder = await neworder.save();
    res.json(savedOrder);

})


module.exports = router;