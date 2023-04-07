const Product = require("../models/Product");

const { tokenAndAdminVerification } = require("./tokenVerification");

const router = require("express").Router();

// create product
router.post("/", tokenAndAdminVerification, async (req, res) => { // only admin can add a product
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch(err) {
        res.status(500).json(err);
    }
})

// update product
router.put("/:id", tokenAndAdminVerification, async (req, res) => { // only admin can update a product
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch(err) {
        res.status(500).json(err);
    }
})


// delete product
router.delete("/:id", tokenAndAdminVerification, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product successfully deleted")
    } catch(err) {
        res.status(500).json(err)
    }
})


// get a single product by ID
// both users and admin can get a product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});


// get all products
// both users and admin can get all products
router.get("/", async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category; // change this to 'category'
    try {
        let products;
        if (queryNew) {
            products = await Product.find().sort({createdAt: -1}).limit(1);
        } else if (queryCategory) {
            // ff the category is found in the array, the products in that category will be fetched
            products = await Product.find({
                category: { // change this to 'category'
                    $in: [queryCategory],
                }
            });
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;