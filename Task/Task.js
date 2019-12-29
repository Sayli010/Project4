const Task = mongodb.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task = new Task({
    description:'Learn the Mongoose Library',
    completed:false
})

task.save().then(() => {
    console.log(task);
}).catch((error)=>{
    console.log(error);
})

