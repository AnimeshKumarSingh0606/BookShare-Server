const express = require("express");
const app = express();
const userRouter = require("./Routes/userRouter");



app.use(express.json());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
  
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  
    next();
  });

app.use("/api/user",userRouter);


app.use((err, req, res, next) => {
   
  
    res
      .status(err.code || 500)
      .json({error:err.message} || { error: "Something went wrong" });
  });

  
app.listen(5000,()=>{
    console.log("Listening at port 5000");
})