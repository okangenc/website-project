const CryptoJS = require("crypto-js");
const User = require("../models/User");
const {
    // tokenVerification,
    tokenVerificationAndAuthorisation,
    tokenAndAdminVerification
} = require("./tokenVerification")

const router = require("express").Router();

router.put("/:id", tokenVerificationAndAuthorisation, async (req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new:true
        })
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json(err);
    }
})

// delete user
router.delete("/:id", tokenVerificationAndAuthorisation, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User successfully deleted")
    } catch(err) {
        res.status(500).json(err)
    }
})

// get user
router.get("/find/:id", tokenAndAdminVerification, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...userWithoutPassword } = user._doc;
        res.status(200).json(userWithoutPassword);
    } catch(err) {
        res.status(500).json(err)
    }
})

// get all users
router.get("/", tokenAndAdminVerification, async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err)
    }
})

// export the router
module.exports = router;