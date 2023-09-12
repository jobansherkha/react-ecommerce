const express = require('express');
const router = express.Router();
const Category = require('../modals/category')

router.get('/', async (req, res) =>{

    const categories =  await Category.find()
    res.json(categories);

})
router.post('/addcategory', (req,res)=>{
    const newCategory = new Category({
        name: req.body.category
    }

    )
    const savedCategory = newCategory.save();
    res.json(savedCategory)
})

module.export = router;