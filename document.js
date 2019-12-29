//const fs = require('fs')


const createDoc = (name,age) => {
    return save().then(() => {
        console.log(me);
    }).catch((error)=>{
        console.log(error);
    })
}


module.exports = {
   createDoc:createDoc
}