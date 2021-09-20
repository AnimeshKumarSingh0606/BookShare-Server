const express = require("express");
const Router = express.Router();
const { body } = require('express-validator');



Router.post("/signup",[body('email').isEmail(),
body("password").isLength({min:6}),
body("confirmPassword").isLength({min:6}),
body("address").notEmpty(),
body("contactNo").isLength({min:10,max:10})],usersController.signup)

Router.post("/login",[body("email").isEmail(),
body("password").isLength({min:6})],usersController.login)





module.exports = Router;