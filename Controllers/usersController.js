const HttpError = require("../Models/httpError");
const {  validationResult } = require('express-validator');

const signup = (req,res,next)=>{
    if (!errors.isEmpty()) {
        return next(new HttpError("Invalid Inputs.Please fill the form again",406));
      }
    if(req.body.password!==req.body.confirmPassword)
    {
        return next(new HttpError("Invalid Inputs.Please fill the form again",406));
    };
    

    // animesh firebase auth
}

const login = (req,res)=>{
    if (!errors.isEmpty()) {
        return next(new HttpError("Invalid Inputs.Please fill the form again",406));
      }
    // animesh firebase auth
}

module.exports.signup = signup;
module.exports.login = login;