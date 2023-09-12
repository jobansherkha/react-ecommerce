const express = require('express');
const router = express.Router();
const Product = require('../modals/productmodal');



router.post('/', (req,res)=>{
    
    const newProduct = new Product({
        title: req.body.title,
        image: req.body.image,
        description : req.body.description,
        price : req.body.price,
        category: req.body.category

    });

const savedProduct = newProduct.save();
    res.json(savedProduct);

})

router.get('/', async (req, res) =>{

    const products =  await Product.find()
    res.json(products)

})

module.exports = router;


