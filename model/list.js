const mongoose=require('mongoose')
const schema= mongoose.Schema
const listschema=new schema({
    name:{type:String},
    date:{type:Date},
    description:{type:String}
})

module.exports=mongoose.model('List',listschema)