const  mongoose  = require("mongoose");
const express = require("express");
const serviceSchema = require("./models/servicesSchema");   
const app = express();
const cors = require("cors");  
require("dotenv").config();

app.use(cors());      
const Port =  process.env.PORT || 3000;  
const  MONGODB_URI = process.env.MONGODB_URI;     


main().then(() =>{
    console.log("connect to DB");  
}).catch(err => console.log(err));  

async function main() {
  await mongoose.connect(MONGODB_URI);     
}
  
app.get("/", async (req,res) =>{
  try{
    const services = await serviceSchema.find();
    res.json(services);      
  }catch(err){
    console.log(err);  
    res.status(500).json({message: err.message});
  }
});    

app.get("/booking/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const booking = await serviceSchema.findById(id);
      console.log(booking);  
      if (!booking) {
        return res.status(404).send("Booking not found");
      }
      res.json(booking);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });  



  

 
app.listen(Port,() =>{  
    console.log(`app is listen to ${Port}`);   
});  
