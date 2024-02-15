const express=require('express')
const router=express.Router();

const listCont=require('../controller/list')

router.get('/',listCont.getlist)
router.post('/create',listCont.postlist)
router.get('/delete',listCont.delete)

module.exports=router