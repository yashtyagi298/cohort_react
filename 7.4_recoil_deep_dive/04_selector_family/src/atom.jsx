import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios'

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo?=${id}`);
      return res.data;
    },
  })
});