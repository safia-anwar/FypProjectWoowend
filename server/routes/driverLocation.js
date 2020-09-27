var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb+srv://safiaa:safiaa@cluster0.ye0r3.mongodb.net/woowend?retryWrites=true&w=majority", ["driversLocation"]);


//upadate driver socket id

router.put("/driverLocationSocket/:id", function(req, res, next){

	var io = req.app.io;
	if(!req.body){
		res.status(400);
		res.json({
			"error":"Bad data"
		});

	}else{
		db.driversLocation.update({_id:mongojs.ObjectId(req.params.id)}, 
			{$set: {socketId:req.body.socketId}}, function(err, updateDetails){
				if(err){
					res.send(err);

				}else{
					res.send(updateDetails);
				}
		});
	}
});




//get nearby driver
router.get("/driverLocation", function(req, res, next){


	db.driversLocation.createIndex({"coordinate":"2dsphere"});
	db.driversLocation.find({
			"coordinate":{
				"$near":{
					"$geometry":{
						"type":"Point",
						"coordinates": [parseFloat(req.query.latitude), parseFloat(req.query.longitude)]
					},
					"$maxDistance":10000
				}
			}

		}, function(err, location){
			if(err){
				res.send(err);

			}else{
				res.send(location);
			}
	});

});



module.exports = router;
