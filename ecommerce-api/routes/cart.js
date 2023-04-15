const Cart = require("../models/Cart");
const {
    tokenVerification,
    tokenVerificationAndAuthorisation,
    tokenAndAdminVerification, } = require("./tokenVerification");

const router = require("express").Router();

// create cart
router.post("/", tokenVerification, async (req, res) => {
    const newCart = new Cart(req.body) 
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch(err) {
        res.status(500).json(err);
    }
});

// update cart
router.put("/:id", tokenVerificationAndAuthorisation, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete cart
router.delete("/:id", tokenVerificationAndAuthorisation, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart successfully deleted")
    } catch(err) {
        res.status(500).json(err)
    }
});

// get user cart
router.get("/find/:userID", tokenVerificationAndAuthorisation, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userID: req.params.userID });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all carts
router.get("/", tokenAndAdminVerification, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router