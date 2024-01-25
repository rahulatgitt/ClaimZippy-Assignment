const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Email Validation
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// Schema define and validation
const employeeSchema = new Schema({
    name: {
        type: String,
        required : true,
        min : 2
    } ,
    designation:{
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone:{
        type : Number,
        required: true,
         
    },
    age: {
        type: Number,
        required : true

    }
},{timestamps: true})


// phone number validation
 employeeSchema.path('phone').validate(function validatePhone() {
    return ( this.phone > 999999999 );
  });
  
  yourModel = mongoose.model('yourModel', employeeSchema);


const Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee