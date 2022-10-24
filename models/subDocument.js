const mongoose=require('mongoose')
const Schema=mongoose.Schema

const subDocumentSchema=new Schema({
    name:String,
    content:String,
    Image:[
        {
        url: String,
        filename: String
      }
    ]
})

module.exports=mongoose.model("SubDocument",subDocumentSchema);