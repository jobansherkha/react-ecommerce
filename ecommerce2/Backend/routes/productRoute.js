const express = require('express');
const router = express.Router();
const Product = require('../modals/productmodal');
const fetchuser = require('../middleware/FetchUser');



router.post('/addproduct', (req,res)=>{
    
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

router.get('/getproduct', async (req, res) =>{

    const products =  await Product.find()
    res.json(products)

})

router.get('/getproduct/:id', async (req,res)=>{
   
    res.json( await Product.findById(req.params.id))
})

router.delete('/delete/:id', async (req, res) =>{
    // find a note to delete:

  let  product = await Product.findById(req.params.id);
  if(!product) {
    return res.status(404).send("product not found");
  }
  

  product = await Product.findByIdAndDelete (req.params.id);
  res.json({ "success"  : "product has been deleted ", product: product });

})

module.exports = router;


