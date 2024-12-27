require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require('bcryptjs');
const serviceSchema = require("./models/servicesSchema");
const bookingSchema = require("./models/bookingSchema");
const userConstruction = require("./models/userSchema");
const generateRandomPassword = require("./utils/randomPassword");   
const nodemailer = require("nodemailer");   
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_USER_PASSWORD;



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
    const services = await serviceSchema.find();
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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,  
  },
});


app.post("/signup", async (req, res) => {
  const { name, email } = req.body;  
  console.log("body",req.body);
  const sample = generateRandomPassword();
    console.log("randomPassword", sample);  

  const existEmail = await userConstruction.findOne({ email });
  console.log("email",existEmail);  

  if (existEmail) {
    return res.status(400).json({ success: false, message: "Email already exist" });
  }
   

  try {
    const randomPassword = generateRandomPassword();
    console.log("randomPassword", randomPassword);  
    const hashpassword = bcrypt.hashSync(randomPassword, 10);
    const userconstruction = new userConstruction({ name, email, password: hashpassword });
    await userconstruction.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `welcome to construcion services ${name}`,  
      text: `thank you for signing up! of our platform, use this password to login in: ${randomPassword}`
    };  
    console.log("Mail Options:", mailOptions);

    transporter.verify((err) => {
      if (err) {
        console.error("Mail transporter error:", err);
      } else {
        console.log("Mail transporter is ready");
      }
    });
      
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).json({
          message: "Error seding email"
        });
      } else {
        res.status(200).json({
          message: "user sinup successfuly! check your email to verify."
        });  
      }
    });  

  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internal server error"
    });
  }  
});  
  


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("body", req.body);


  try {
    const userFound = await userConstruction.findOne({
      email: email
    });
    console.log(userFound);

    if (userFound) {
      const isMatch = bcrypt.compareSync(password, userFound.password);
      if (!isMatch) {
        return res.status(401).json({
          message: "password invalid please give right password"
        });
      }

      const token = jwt.sign({
        _id: userFound._id,
      }, JWT_SECRET);

      console.log("token", token);
      res.status(200).json({
        message: "login successfuly",
        token: token
      });

    } else {
      res.status(401).json({
        message: "user not found"
      });
    };
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internal server error"
    });
  }
});


app.listen(Port, () => {
  console.log(`app is listen to ${Port}`);
});
