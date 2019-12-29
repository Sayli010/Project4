const mongodb = require('mongoose');
const validator = require('validator');
const User = mongodb.model('user',{
        name:{
            type:String,
            
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            require:true,
            trim:true,
            lowercase:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid')
                }
            }
        }
    })
    
    const userInsert = new User({
        name:'Sayli',
        age:24,
        email:'sayli@gmail.com'
    })

    userInsert.save().then(() => {
        console.log(userInsert)
    }).catch((error)=>{
        console.log(error);
    })
   

   module.exports = {
    User:User
   }
    