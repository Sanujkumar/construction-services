const {z} =  require("zod");
const bookingSchema = require("../models/bookingSchema");
const  serviceSchema = require("../models/servicesSchema");  
const userSchema = require("../models/userSchema");  


module.exports.bookingSchema = z.object({
    serviceId: z.string(),
    name: z.string(),
    phone: z.string().min(10).max(10).regex(/^\d+$/, "Phone number must be numeric"),
    email: z.string().email("Invalid email format"),
    bookingDate: z.preprocess((arg) => new Date(arg), z.date()), 
    bookingTime: z.string(), 
    area: z.string(),
    city: z.string(),
    state: z.string(),
    pincode: z.string().regex(/^\d{6}$/, "Invalid pincode format"), 
    bookingId: z.string().optional() 
});    
  

module.exports.serviceSchema = z.object({
    name: z.string().min(1,"name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(0, "price must be positive number"),
    duration: z.string().min(1,"duration is required"),
    image: z.string().url("image URl must be valid")
});  
  

module.exports.userSchema = z.object({
    name: z.string().min(1,"valid name"),
    email: z.string().email("invalid email format"),
    password: z.string().min(4,"min 4 character in password")
    
});        

