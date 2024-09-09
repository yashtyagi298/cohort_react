const mongoose=require('mongoose');

const mongoURL ="mongodb+srv://tyagiyash097:yashtyagi123@cluster0.jwkcxja.mongodb.net/Todos";

mongoose.connect(mongoURL);


const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todo = mongoose.model('Todo',todoSchema);

module.exports={
  Todo
}




// Todo{
//     title:string,
//     description:String,
//     completed:boolean
// }