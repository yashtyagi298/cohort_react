const express = require('express');
const { createTodo, updateTodo } = require('./type');
const { Todo } = require('./db');
const app= express();
const port=3000;
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173" // here we are strict that only 5173 host hit the backend and access it 
}));
app.post('/todo', async (req, res) => {
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
   }
   // put it mongodb
   await Todo.create({
    title: createPayload.title,
    description:createPayload.description,
    completed:false
   })
   res.json({
    msg:"Todo Created Successfully!"
   })

});

app.get("/todo",async(req, res) => {
  const todos =await  Todo.find()
  console.log("data fetched..")
  res.json({
    todos
  })
});

app.put("/complete", async (req, res) => {
    try{
    const createPayload2= req.body;
    const parsedPayload2= updateTodo.safeParse(createPayload2);
    console.log(parsedPayload2);
    if(!parsedPayload2.success){
        res.status(411).json({
            msg:"You sent a wrong input"
        })
        return ;
    }

    await Todo.findByIdAndUpdate({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked as completed"
    })
}catch(err){
    console.log(err);
    res.status(400).json({msg:"internal matter"});
}
});

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})