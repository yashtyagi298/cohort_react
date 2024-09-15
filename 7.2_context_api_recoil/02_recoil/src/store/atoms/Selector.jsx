 import {selector} from 'recoil'
import { countAtom } from './Count'

 export const evenSelector = selector({
    key:"evenSelector",
    get:({get})=>{
        const count = get(countAtom);
        return count % 2==0;
    }
 })