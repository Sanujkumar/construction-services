const  mongoose  = require("mongoose");
const express = require("express");
const serviceSchema = require("./models/servicesSchema");   
const app = express();
const cors = require("cors");  

    
const Port = process.env.PORT || 3000;

app.use(cors());  
app.use(express.json);



main().then(() =>{
    console.log("connect to DB");  
}).catch(err => console.log(err));  

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/constructionServices');   
}
  
app.get("/", async (req,res) =>{
    try {
        const services = await Service.find(); 
        res.status(200).json(services); 
      } catch (err) {
        console.error("Error fetching services:", err.message);
        res.status(500).send({ message: "Server Error", error: err.message });
      } 
});      
  


  


app.listen(Port,() =>{  
    console.log(`app is listen to ${Port}`);   
})
