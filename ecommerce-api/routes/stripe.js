const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
    try {
        // create a charge
        const charge = await stripe.charges.create({
            source: req.body.tokenID,
            amount: req.body.amount,
            currency: "gbp",
        });

        res.status(200).json(charge);
    } catch (stripeError) {
        res.status(500).json(stripeError);
    }
});

module.exports = router;
