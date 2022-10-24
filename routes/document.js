const express=require('express')
const router=express.Router();
const {getDocument,addDocument,showDocument}=require('../controllers/document.js')

router.get('/:user_id',getDocument)
router.post('/:user_id/adddocs',addDocument)
router.get("/docs/:doc_id",showDocument)

module.exports=router

