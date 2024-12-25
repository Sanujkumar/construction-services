const mongoose = require("mongoose");
const UserConstruction = require("./userSchema")


const serviceSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,  
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserConstruction', 
        required: true   
    }
});  

const serviceData = mongoose.model("serviceData",serviceSchema);    

module.exports = serviceData;
  
  

