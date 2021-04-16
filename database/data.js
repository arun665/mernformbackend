const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongodb:Arun1117@cluster0.spwl1.mongodb.net/scratchnest?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
var conn =mongoose.Collection;
var passSchema =new mongoose.Schema({
    Name: {type:String, 
        },
        Email: {type:String, 
        
           },
        Contact:{type:String, 

           },
           City:{type:String, 
     
           },
           Organisation:{type:String, 
     
           },
           Designation:{type:String, 
     
           },
           Experience:{type:String, 
     
           },
    date:{
        type: Date, 
        default: Date.now }
});

var formData = mongoose.model('formData', passSchema);


module.exports=formData;