const jwt = require("jsonwebtoken")

const tokenVerification = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) res.status(403).json("Your token is invalid");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("You do not have authentication")
    }
}

const tokenVerificationAndAuthorisation = (req, res, next) => {
    tokenVerification(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next() // if the user is admin, the function is continued
        } else {
            res.status(403).json("Action prohibited")
        }
    })
}

// for the admin
const tokenAndAdminVerification = (req, res, next) => {
    tokenVerification(req, res, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("Action prohibited")
        }
    })
}

module.exports = {
    tokenVerification,
    tokenVerificationAndAuthorisation,
    tokenAndAdminVerification
};
