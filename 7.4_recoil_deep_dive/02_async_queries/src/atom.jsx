import axios from "axios";
import { atom, selector } from "recoil";
// async data Queries 
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async ()=>{
            const res = await axios.get("https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo")
            return res.data[0]
        
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})