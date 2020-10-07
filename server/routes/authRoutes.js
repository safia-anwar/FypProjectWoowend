const express = require('express')

const router = express.Router();

var mongojs = require("mongojs");

const jwt = require("jsonwebtoken");

const {jwtkey} = require('../keys.js');

const requireLogin = require("../middleware/requireToken");

const bcrypt = require("bcrypt");
const saltRounds = 10;

var db = mongojs("mongodb+srv://safiaa:safiaa@cluster0.ye0r3.mongodb.net/woowend?retryWrites=true&w=majority", ["user"]);

 router.get("/authRoutes", function(req, res, next){
	db.user.find(function(err, user){
 	if(err){
		res.send(err);
 		}
  		res.json(user);
  	})
 }); 


router.get("/authRoutes/requireLogin",requireLogin,(req,res)=>{
    
    console.log("Email Found")
  
})



//signup
router.post("/authRoutes/signUp", function(req, res, next){
     
     const email = req.body.email;
     const password = require('crypto')
                          .createHash('sha1')
                          .update(req.body.password)
                          .digest('base64');
    try {
    
        db.user.save({email,password},(error,result)=>{

                
                console.log(result)
                console.log(result._id)
                const token = jwt.sign({userId:result._id},jwtkey)
                res.send({token}); 

        })
    } catch (err) {
        res.status(400).send(err.message);
        
    }
 

})

//hashing and salting 


module.exports = router;