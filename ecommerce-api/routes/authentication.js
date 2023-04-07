const router = require("express").Router();
const User = require("../models/User")
// for hashing and encryption (crypto-js)
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken");

// register post request
router.post("/register", async (req, res) => {
    const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString();
    console.log('Encrypted password:', encryptedPassword);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: encryptedPassword,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong Username");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            res.status(401).json("Wrong Password");
        } else {
            // create a new object with the required user details (does not show password for security reasons)
            const userWithoutPassword = {
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin
            };

            // generate access token
            const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: "1d"
                }
            );

            // send response with user details and access token
            // ... = spread operator
            res.status(200).json({ ...userWithoutPassword, accessToken });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;