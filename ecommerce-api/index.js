// require the .env packaage and configure it
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authenticationRoute = require("./routes/authentication");
const stripeRoute = require("./routes/stripe"); // Import the new stripe.js file
const cors = require("cors"); // Add this line to import the cors package

// added these lines to apply the middleware
app.use(express.json());
app.use(cors()); // Add this line to enable CORS

// added this line to apply the middleware
app.use(express.json());

// import user router
const userRoute = require("./routes/user");

// import product router
const productRoute = require("./routes/product");

// import cart router
const cartRoute = require("./routes/cart");

// import order router
const orderRoute = require("./routes/order");

// mongoose.connect function to use the environmental variable
mongoose.connect(
  process.env.MONGODB_URL // secret key name
).then(() => console.log("Database Connection Successful")
).catch((err) => {
  console.log(err);
});

// lets me pass json files (already used on line 7)
app.use(express.json());

app.use("/api/users", userRoute); // when we go to /api/user, our application will use userRoute
app.use("/api/authentication", authenticationRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api", stripeRoute); // Register the new Stripe route with the '/api' base path

app.listen(3000, () => {
  console.log("Backend server is running");
});



/*
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authenticationRoute = require("./routes/authentication")

// added this line to apply the middleware
app.use(express.json());

// require the .env packaage and configure it
const dotenv = require("dotenv");
dotenv.config();

// import user router
const userRoute = require("./routes/user");

// import product router
const productRoute = require("./routes/product");

// import cart router
const cartRoute = require("./routes/cart");

// import order router
const orderRoute = require("./routes/order");


// mongoose.connect function to use the environmental variable
mongoose.connect(
    process.env.MONGODB_URL // secret key name
    ).then(() => console.log("Database Connection Successful")
    ).catch((err) => {
        console.log(err);
    });

// lets me pass json files (already used on line 7)
app.use(express.json());
    
app.use("/api/users", userRoute); // when we go to /api/user, our application will use userRoute
app.use("/api/authentication", authenticationRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(3000, () => {
    console.log("Backend server is running")
});
*/