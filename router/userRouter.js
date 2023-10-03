const express= require('express');
const router= express.Router();
const getUser=require("../controller/useConroller")
router.get("/home",getUser) 

module.exports=router