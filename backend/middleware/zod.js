const {z} =  require("zod");
const bookingSchema = require("../models/bookingSchema");
const  serviceSchema = require("../models/servicesSchema");  
const userSchema = require("../models/userSchema");  

import { z } from "zod";

export const bookingSchema = z.object({
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
  

export const serviceSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    userId: z.string(),
    image: z.string(),
    status: z.string(),
    date: z.date(),
    time: z.string(),
});


export const userSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    
});

