var express=require("express");
var router=express.Router();
var formData = require('../database/data.js');
const bodyParser = require("body-parser");

const jwt=require("jsonwebtoken");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get("/",function(req,res){
    res.send("running api success");
})


router.post("/add_data",function(req,res){
    
    var name=req.body.name;
    var email=req.body.email;
    var contact=req.body.number;
    var city=req.body.city;
    var organisation=req.body.organisation;
var designation=req.body.designation;
var experience=req.body.experience;

    console.log(name);
    var newdata=new formData({

        Name:name,
        Email:email,
Contact:contact,
City:city,
Experience:experience,
Designation:designation,
Organisation:organisation
    });

    newdata.save()
    .then(doc=>{

        var token=  jwt.sign({
            data:name,
            
                     } ,
                        'secret' , {
                            expiresIn:"8h"
                        } 
                        );

        res.status(201).json({
            message:"User Registered Successfully",
            results:doc,
            token:token
        });
    })
    .catch(err=>{
        res.json(err);
    });
});



router.get("/getdata",function(req,res){

    var data=formData.find();

    data.exec()
    .then(doc=>{
        res.status(201).json({
            message:"User Registered Successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    })

})

module.exports=router;