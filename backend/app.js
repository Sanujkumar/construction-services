const  mongoose  = require("mongoose");
const express = require("express");
const serviceSchema = require("./models/servicesSchema");   
const app = express();
const cors = require("cors");  

app.use(cors());    
const Port = 3000;

main().then(() =>{
    console.log("connect to DB");  
}).catch(err => console.log(err));  

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/constructionServices');   
}
  
app.get("/", async (req,res) =>{
    const services = await serviceSchema.find();
    res.json(services);  
});    



  


app.listen(Port,() =>{  
    console.log(`app is listen to ${Port}`);   
})
