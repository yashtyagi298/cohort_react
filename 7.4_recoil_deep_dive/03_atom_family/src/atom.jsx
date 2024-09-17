import {atomFamily} from 'recoil'
import { TODOS } from './TODOS.JSX'


export const todosAtomFamily = atomFamily({
 key:'todosAtomFamily',
 default:id=>{
    return TODOS.find(x=>x.id===id)
 }
})