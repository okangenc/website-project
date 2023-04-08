const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Your Product Name",
            },
            unit_amount: 1000, // price in cents
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["GB", "US"], // You can add more country codes or use ['*'] to allow all countries
      },
      mode: "payment",
      success_url: "http://localhost:3001/success",
      cancel_url: "http://localhost:3001/cancel",
    });

    res.json({ sessionId: session.id }); // Make sure you return sessionId correctly
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error"); // Send proper error status
  }
});

module.exports = router;


/*
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
*/
