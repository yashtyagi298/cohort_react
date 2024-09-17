
import './App.css'
import { RecoilRoot, useRecoilState , useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atom';


function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={3} />
  </RecoilRoot>
}

function Todo({id}) {
  // useRecoilStateLoadable it returns a state or contents, hasError , hasValue with todo
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  
   if(todo.state==="loading"){
    return <div>
      loading....
    </div>
   }else if(todo.state==="hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
   }else if(todo.state==="hasError"){
    return <div>eroorr</div>
   }
 
}

export default App