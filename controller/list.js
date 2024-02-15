const List=require('../model/list')

exports.getlist=async(req,res)=>{
    const list=await List.find()
    try{
        res.json({
            data:list
        })
    }
    catch(err){
        console.log(err)
    }
}

exports.postlist=async(req,res)=>{
    const{name, date, description}=req.body
    try{
        const newUser=new List({
            name,
            date,
            description
        })
        await newUser.save()
        res.json({newUser})
    }
    catch(err){
        console.log(err)
    }
}
exports.delete=async(req,res)=>{
    let index=List.findIndex(list=>list.name==name &&list.date==date&&list.Catogry==Catogry)
    if(index!=-1){
        List.splice(index,1)
    }
    return res.redirect('/')
}
