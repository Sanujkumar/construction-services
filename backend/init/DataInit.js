const mongoose = require("mongoose");  
const data = require("./data");  
const serviceSchema = require("../models/servicesSchema");  


main().then(() =>{
    console.log("connect to DB");  
}).catch(err => console.log(err));  

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/constructionServices');   
}  

const initData = async () => {
    try {
        await serviceSchema.deleteMany({});  
        const count = await serviceSchema.countDocuments();
        console.log(`Number of records in the collection: ${count}`);
        if (count === 0) {
            await serviceSchema.insertMany(data); 
            console.log("Data initialized successfully");
        } else {
            console.log("Data already exists");
        }
    } catch (e) {
        console.error("Error during initialization:", e);
    }
};
  
initData();  