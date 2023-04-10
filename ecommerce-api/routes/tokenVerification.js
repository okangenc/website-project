const jwt = require("jsonwebtoken")

const tokenVerification = (req, res) => {
    return new Promise((resolve, reject) => {
      const authHeader = req.headers.token;
      if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
          if (err) {
            res.status(403).json("Your token is invalid");
            reject(err);
          }
          req.user = user;
          resolve();
        });
      } else {
        res.status(401).json("You do not have authentication");
        reject("No authentication header");
      }
    });
  };
  

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
const tokenAndAdminVerification = async (req, res, next) => {
    try {
      await tokenVerification(req, res);
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("Action prohibited");
      }
    } catch (err) {
      console.error(err);
    }
  };

module.exports = {
    tokenVerification,
    tokenVerificationAndAuthorisation,
    tokenAndAdminVerification
};
