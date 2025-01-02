require("dotenv").config();    
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_USER_PASSWORD  
const {bookingShema,serviceSchema,userSchema }  = require("./zod");    

module.exports.userAuth = (req,res,next) => {
    const token = req.header.token;  
    if(!token){
        return res.json({
            message: "not token is provide"
        });  
    }
    
    try {
    const decoded = jwt.verify(token,JWT_SECRET);    
    req.userId = decoded.id;  
    next();  
    }catch(err){
        res.json({
            message: "you are not logedin"  
        })
    }  
} ;                

module.exports.userAuthorization = (req,res,next) => {
    const userId = req.userId;
    const postId = req.params.id;
    if(userId !== postId){
        return res.json({
            message: "you are not authorized to access this post"
         });
    }
    next();    
};



module.exports.bookingSchemaValidation = (req,res,next) => {
    try{
    const validationData = bookingShema.parse(req.body);
    next();
    }catch(err){
        return res.json({
            message: "schema validation failed"
        });
    }
};

module.exports.servicesSchemaValidation = (req,res,next) => {
    try{
    const validationData = serviceSchema.parse(req.body);
    next();
    }catch(err){
        return res.json({
            message: "schema validation failed"
        });
    }
};

module.exports.usersSchemaValidation = (req,res,next) => {
    try{
    const validationData = userSchema.parse(req.body);
    next();
    }catch(err){
        return res.json({
            message: "schema validation failed"
        });
    }
} ;   