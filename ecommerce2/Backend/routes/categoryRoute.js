const express = require('express');
const router = express.Router();
const Category = require('../modals/category')

router.get('/getcategories', async (req, res) =>{

    const categories =  await Category.find()
     if(!categories){
        res.status(500).json({success: false})
     }
     res.status(200).send(categories);

})
router.post('/addcategory', async (req,res)=>{
    const newCategory =  new Category({
        categoryName: req.body.categoryName,
        description: req.body.description
    }

    )
    const savedCategory = await newCategory.save();
    if(!savedCategory){
        res.status(400).send('category cannot be created')
    }
    res.send(savedCategory)
})

router.delete('/deleteNote/:id', async(req, res)=>{
   await  Category.findByIdAndRemove(req.params.id)
    res.json("category has been deleted")
})

module.exports = router;