const jwt = require('jsonwebtoken');

var mongojs = require("mongojs");

var ObjectId = mongojs.ObjectId;

const {jwtkey} = require('../keys.js');

var db = mongojs("mongodb+srv://safiaa:safiaa@cluster0.ye0r3.mongodb.net/woowend?retryWrites=true&w=majority", ["user"]);


module.exports = (req,res,next)=>{
       const { authorization } = req.headers;
       //authorization === Bearer sfafsafa
       if(!authorization){
           return res.status(401).send({error:"you must be logged in"})
       }

       const token = authorization.replace("Bearer ","")

       console.log(token)

      // let sample="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxYjllYjAyOTk4MjFlMGMzODc5ODEiLCJpYXQiOjE2MDE1NDQ1Njl9.vEKGFLknlvlSi9-qEyawjoL9sERiQfGu32hit4higK0"

       jwt.verify(token,jwtkey , async(err,payload)=>{
           if(err){
             return  res.status(401).send({error:"You are not verified"})
           }

        console.log(payload)

        const {userId} = payload;

       //console.log(userId)
    
         db.user.find({_id: ObjectId(userId)}, function (err, user){
	                if(err){
		              	res.send(err); 
                     }
                      res.json(user)
                     //res.json(user[0].email);
                     req.user=user;

                     })
          next();
       })
}