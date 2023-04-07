const Order = require("../models/Order");
const {
    tokenAndAdminVerification,
    tokenVerification,
    tokenVerificationAndAuthorisation } = require("./tokenVerification");

const router = require("express").Router();

// create order
router.post("/", tokenVerification, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch(err) {
        res.status(500).json(err);
    }
});

// update order (only admin)
router.put("/:id", tokenAndAdminVerification, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete order (admin)
router.delete("/:id", tokenAndAdminVerification, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order successfully deleted")
    } catch(err) {
        res.status(500).json(err)
    }
});

// get user orders
router.get("/find/:id", tokenVerificationAndAuthorisation, async (req, res) => {
    try {
        // users can have more than one orders
        const orders = await Order.find({ userID: req.params.userID });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all user orders
router.get("/", tokenAndAdminVerification, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get statistics for monthly income from user orders (admin only)
// get the income statistics for the current month and compare with the previous month
router.get("/income", tokenAndAdminVerification, async (req, res) => {
    const date = new Date();
    const month = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(month.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },
            {
                $group: {
                    _id:"$month",
                    total: { $sum: "$sales" },
                }
            }
        ]);
        res.status(200).json(income);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router