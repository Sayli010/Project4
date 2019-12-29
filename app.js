// const yargs = require('yargs');
// const mongodb = require('mongoose');
// const validator = require('validator');
// const me = require('./document')
// yargs.version('1.1.0');

// mongodb.connect('mongodb://127.0.0.1:27017/Person1',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// },(error,result)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("connected");
        
//     }
// });
// // const me = new User({
// //     name:'Sayli',
// //     age:24,
// //     email:'sayli@gmail.com'
// // })
// yargs.command({
//     command: 'create',
//     describe: 'create new doccument',
//     builder: {
//         name: {
//             describe: 'name',
//             demandOption: true,
//             type: 'string'
//         },
//         age: {
//             describe: 'age',
//             demandOption: true,
//             type: 'string'
//         }
//         // email:{
//         //     type:String,
//         //     require:true,
//         //     trim:true,
//         //     lowercase:true,
//         //     validate(value){
//         //         if(!validator.isEmail(value)){
//         //             throw new Error('Email is invalid')
//         //         }
//         //     }
//         // }
//     },
//     handler(argv) {
//         // notes.addNote(argv.title, argv.body)
        
       
//     }
// })


const user = require('./User/User')


const mongodb = require('mongoose');

mongodb.connect('mongodb://127.0.0.1:27017/Person',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
},(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log('connneted');
    }
})





