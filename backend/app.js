const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require('bcryptjs');    
const serviceSchema = require("./models/servicesSchema");
const bookingSchema = require("./models/bookingSchema");  
const userSchema = require("./models/userSchema");      
const app = express();
app.use(express.urlencoded({ extended: true }));       
app.use(express.json());
const cors = require("cors");
require("dotenv").config();
    
app.use(cors());
const Port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// const mongoUrl = "mongodb://127.0.0.1:27017/constructionServices"  
async function main() {
  await mongoose.connect(MONGODB_URI);  
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.get("/", async (req, res) => {
   
  try {
      services = await serviceSchema.find();
      res.json(services); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});      




app.get("/services/search", async (req, res) => {
  const { name } = req.query;  
  console.log("Search term:", name);

  try {
    if (!name || typeof name !== "string") {
      return res.status(400).json({ message: "Invalid search term" });
    }
    const services = await serviceSchema.find({
      name: { $regex: name.trim(), $options: "i" },
    });
    
    res.json(services);
  } catch (e) {
    console.error("Error searching services:", e);
    res.status(500).json({ message: e.message });
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
    

    

app.post("/bookingData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Service ID:", id);

    console.log("request body", req.body);  

    const bookingData = { ...req.body, serviceId: id };
    const newBooking = new bookingSchema(bookingData);
    
    console.log("New Booking:", newBooking);

    await newBooking.save();

    res.json({
      success: true,
      message: "Booking created successfully",
      data: newBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message,
    });
  }
});


app.post("/sinup", async (req,res) =>{
  const { name, email, password,re_enter } = req.body;
   
  if(password !== re_enter){
    return res.json({
      error: "password do not match"
    });  
  }

  try {
    const hashpassword = bcrypt.hashSync(password,10);  
    const user = new userSchema({ name, email, hashpassword });
    await user.save();  
    res.json({
      message: "user sinup successfuly!"
    });  
  }catch(e){  
    console.error(e);  
  }
});    


app.listen(Port, () => {
  console.log(`app is listen to ${Port}`);
});  
  