

 export function CreateTodo(){
    return <div style = {{
        border: '1px solid',
        width: '30%',
        borderRadius:'10px'
    }}>
        <input style={{
            padding:10,
            margin:10,
            borderRadius:12
            }} type="text" placeholder="Title"></input><br></br>
        <input style={{ 
            padding:10,
            margin:10,
            borderRadius:12
            }} type="text" placeholder="Description"></input><br></br>

        <button style={{ 
            padding:7,
            margin:10,
            borderRadius:12
            }} onClick={()=>{
                fetch("https://localhost:3000/todo",{
                    method:"POST",
                    body:{
                        title:"",
                        description:""
                    }
                })
                   .then(async function(res){
                    const json = await res.json();
                    alert("Todo added");
                   }) 
            }} >Add Todo</button><br></br>
    </div>
}