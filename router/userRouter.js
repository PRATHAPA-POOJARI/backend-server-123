const express= require('express');
const router= express.Router();
const getUserData=require("../controller/useConroller")
router.get("/home",getUserData) 

module.exports=router