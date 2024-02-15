const express=require('express')
const mongoose=require('mongoose')
const port=8000;

const router=require('./router/list')
const url="mongodb+srv://siva:siva%402002@cluster0.bdhwhxn.mongodb.net/?retryWrites=true&w=majority"
const app=express();
app.use('/',router)
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})

app.listen(port,function(err){
    console.log("it is working at"+ port)
})
